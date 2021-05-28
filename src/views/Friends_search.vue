<template>
  <div class="wrapper friends_new">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
      <Search/>
      
      <div class="w_btn"><router-link to="/friends/search/advanced"><p class="btn btn_gray">Advanced search</p></router-link></div>
      <div class="line"></div>
      <h2>Recommendations</h2>
      <div class="wrapper wrapper_friends">
        <div class="wrapper friend_list">
          <!--TODO bind to data -->
          <!--CardFriend v-for="(friend,index) in friends" v-bind:key="index" :friend="friend"/-->
          <Suggestion v-for="(user, index) in getRandUsers()" v-bind:key="index" :user="user"/>
          <Suggestion2 v-for="(user, index) in usersDB" v-bind:key="index" :user="user"/>
        </div>
      

      </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import Search from "@/components/Search.vue";
import Suggestion from "@/components/Card_friend_suggestion.vue";
import Suggestion2 from "@/components/Card_friend_suggestion2.vue";
import axios from 'axios';
import service from "@/services/index.js";
//import Search from "@/components/Search.vue";

export default {
  name: "Friends",
  components: {
    Assistant,
    Search,
    Suggestion,
    Suggestion2
  },
  data : function(){
    return{
      test: "Bob", 
      usersDB: null,

    };
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'What kind of friend are you looking for?';
    },
    calculateSuggestions: function() {
      return null;
    },
    getRandUsers: function() {
      return this.allUsers.sort(() => 0.5 - Math.random()).slice(0,3);
    },
    getUsers:  function() {
      const vm = this;
       axios.get(service().defaults.baseURL +'api/users/').then(function(res){
            console.log('I get this: ' + JSON.stringify(res.data));
            vm.usersDB = res.data.sort(() => 0.5 - Math.random()).slice(0,3);
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
       friends() {
          return this.$store.state.friends;
      },
      allUsers() {
          return this.$store.state.allUsers;
      }
  },
  mounted: function() {
    //this.testGet();
    //getRandUsers();
    this.getUsers();
  }
};
</script>

<style scoped lang="scss">
.friends_new {

  .btn_gray {
    width: 100%;
    
  }
  .w_btn {
    justify-self: center;
    width: 20%;
  }
}

.line {
  margin: 2em 0 1em 0;
  height: 2px;
  justify-self: center;
  width:60%;
  background-color: rgba(0, 0, 0, 0.479);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}



</style>