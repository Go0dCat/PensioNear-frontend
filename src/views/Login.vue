<template>
  <div class="login wrapper">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 

    <div class="wrapper">
        <!--add LOGIN here-->
        <h2>Login</h2>
        <div class="w_form wrapper"> <!--NOTE you can put oauth code inside this div, replace the dummy form if you want/need-->   
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
                <br><br><br>
                <input type="submit">
            </form>
            <br><br>
            <p>Do you not have a user yet?</p>
             <router-link to="/newuser"><p class="form_text btn">Create a new user</p></router-link>
        </div>
    </div>

    <p>The username: {{username}}</p>

  </div>
</template>



<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Login",
  components: {
    Assistant,
  },
  data : function(){
    return{
      test: null,
    };
  },
  methods: {
    getGreeting: function() {
      return 'Welcome!';
    },
    getMessage: function() {
      return 'Please login or register.';
    },
  },
  computed: {
      //NOTE: computed properties updates dynamically
      username() {
          return this.$store.state.username;
      }
  }
}
</script>

<style scoped lang="scss">
//Styling found in styles/stylesheet.scss
//found in class .w_form (sorted alphabetically)

p {text-align: center;}
  
</style>
