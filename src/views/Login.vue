<template>
  <div class="login wrapper">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 

    <div class="wrapper">
        <!--add LOGIN here-->
        <h2>Login</h2>
        <div class="w_form wrapper"> <!--NOTE you can put oauth code inside this div, replace the dummy form if you want/need-->   
            <form @submit="tryLogin" v-on:submit.prevent="onSubmit">
                <p>Username:</p>
                <input class="input_inset" v-model="userCredentials.email" placeholder="Write your email here">
                <br><br>
                <p>Password:</p>
                <input type="password" class="input_inset" v-model="userCredentials.password" placeholder="Write your password here">
                <br><br><br>
                <input class="form_text btn" type="submit">
            </form>
            <br><br>
            <p>Do you not have a user yet?</p>
             <router-link to="/newuser"><p class="form_text btn">Create a new user</p></router-link>
        </div>
    </div>

    <!--This p is just for testing purposes, it is connected to vuex storage in store/index.js-->
    <!--p>The username: {{username}}</p-->
  </div>
</template>



<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import axios from 'axios';
import service from "@/services/index.js";

export default {
  name: "Login",
  components: {
    Assistant,
  },
  data : function(){
    return{
      test: null,
      userCredentials: {
        email: null, //"actor@movie.biz"
        password:  null//"grandeBatwurscht"
      },
      //id: null
      //dogs: null //usable in getDogs() example function
    };
  },
  methods: {
    getGreeting: function() {
      return 'Welcome!';
    },
    getMessage: function() {
      return 'Please login or register.';
    },

    //Following function doesn't work, but is an example of how to work with axios. 
    exampleFun: function() {
      let connection = 'serverurl';

      //example of get
      axios.get(connection).then(function(res){
        console.log('I got this: ' +res);
      }).catch(function(error){
        console.log('this went wrong: ' + error);
        confirm('Unable to GET, check valid connection');
      });

      //example of post
      axios.post(connection, {
        test: 'object is second param'
      }).then(function(res){
        console.log('I posted this: ' +res);
      }).catch(function(error){
        console.log('this went wrong: ' + error);
        confirm('Unable to POST, check valid connection');
      });

      //example of put
      axios.put(connection, {
        object: 'value'
        }).then(function(){
          console.log('The res will be the non-updated version, so a new get should do the trick');
        }).catch(function(error){
          console.log('this went wrong: ' + error);
          confirm('Unable to PUT, check valid connection');
        });

      //example of delete
      axios.delete(connection).then(function(){
        console.log('Successfull delete');
      }).catch(function(error){
          console.log('this went wrong: ' + error);
          confirm('Unable to DELETE, check valid connection');
      });
    },
     
    login: async function() {
      console.log('hej');

      axios.post(service().defaults.baseURL +'api/auth', {
        email: "actor@movie.biz",
        password: "grandeBatwurscht"
      }).then(function(res){
          console.log('I posted this: ' + JSON.stringify(res));
          //console.log('Im sending this: ' + JSON.stringify(res.data));
          //TODO following get is not working
          //{user: {_id: 'idstuff'}}
          axios.get(service().defaults.baseURL +'api/users/me',[],{ headers: { Authorization: `token ${res.data}`}}).then(function(res2){
            console.log('I get this: ' + JSON.stringify(res2));
          }).catch(function(error) {
            console.log('this went wrong: ' + error);
            //confirm('Unable to GET, check valid connection');
          });
      }).catch(function(error){
        console.log('this went wrong: ' + error);
        confirm('Unable to POST, check valid connection');
      });
    },
    fetchUser: async function() {
      return null;
    },
    gotoHome: function() {
      this.$router.push('Home');
    },
    tryLogin: async function() {
      console.log('trying to login');
      const vm = this;
      axios.post(service().defaults.baseURL +'api/auth', this.userCredentials).then(function(res){
          console.log('I posted this: ' + JSON.stringify(res));
          //console.log('Im sending this: ' + JSON.stringify(res.data));
          //TODO following get is not working
          //{user: {_id: 'idstuff'}}
          //vm.$router.push('Home'); //redirects to home
          //console.log('I am sending this: ' + JSON.stringify({Authorization: `token ${res.data}`}));
          //console.log('I am sending this: ' + JSON.stringify({Authorization: { headers: { Authorization: res.data}}}));
          axios.get(service().defaults.baseURL +'api/users/me').then(function(res2){
            console.log('I get this: ' + JSON.stringify(res2));
            vm.$router.push('Home'); //redirects to home
          }).catch(function(error) {
            console.log('this went wrong: ' + error);
            //confirm('Unable to GET, check valid connection');
          });
      }).catch(function(error){
        console.log('this went wrong: ' + error);
        confirm('Unable to POST, check valid connection');
      });
    },
    

  },
  computed: {
      //NOTE: computed properties updates dynamically
      username() {
          return this.$store.state.username;
      }
  },
  mounted: function() {
    //this.login();
  }
}
</script>

<style scoped lang="scss">
//Styling found in styles/stylesheet.scss
//found in class .w_form (sorted alphabetically)

p {text-align: center;}
  
</style>
