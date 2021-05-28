<template>
  <div class="home wrapper">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
    <div class="wrapper box_container">
       <router-link to="/messages"><div class="btn btn_square"> <p class="btn_text">Messages</p> </div></router-link> 
       <router-link to="/call"><div class="btn btn_square"> <p class="btn_text">Call</p> </div></router-link> 
       <router-link to="/events"><div class="btn btn_square"> <p class="btn_text">Events</p> </div></router-link> 
       <router-link to="/friends"><div class="btn btn_square"> <p class="btn_text">Friends</p> </div></router-link> 
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import axios from 'axios';
import service from "@/services/index.js";

export default {
  name: "Home",
  components: {
    Assistant,
  },
  data : function(){
    return{
      test: "Bob",
    };
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'What would you like to do now?';
    },
    getUsers:  function() {
       axios.get(service().defaults.baseURL +'api/users/me').then(function(res2){
            console.log('I get this: ' + JSON.stringify(res2));
          }).catch(function(error) {
            console.log('this went wrong: ' + error);
            //confirm('Unable to GET, check valid connection');
          });
    }
  },
  computed: {
      username() {
          return this.$store.state.username;
      },
  }
}
</script>

<style scoped lang="scss">
  
</style>
