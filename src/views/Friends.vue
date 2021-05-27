<template>
  <div class="wrapper friends">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
      <h2> Friend list</h2>
      <div class="wrapper wrapper_friends">
        <div class="wrapper friend_list">
          <!--TODO bind to data -->
          <CardFriend v-for="(friend,index) in friends" v-bind:key="index" :friend="friend"/>
        </div>
        <div class="wrapper friend_create">
          <h2> Add new friend</h2>
          <router-link to="/friends/search"><div class="btn btn_round btn_gray"> <img alt="add new friend icon" src="../assets/add-friend.svg" /></div></router-link>
          <!--TODO combine with search   <Search/>-->
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import CardFriend from "@/components/Card_friend.vue";
import axios from 'axios';
import service from "@/services/index.js";
//import Search from "@/components/Search.vue";

export default {
  name: "FriendsNew",
  components: {
    Assistant,
    CardFriend,

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
      return 'Here are all your friends listed!';
    },
    getFriends: function() {
      return this.friends;
    },
    testGet: async () => {
      //example of get
      axios.get(service().defaults.baseURL).then(function(res) {
        console.log('I got this: '+res);
      }).catch(function(error) {
        console.log('this went wrong: '+error);
        confirm('Unable to GET, check valid connection');
      });
    },
    newFun: function(){
      //Not working
      console.log(service().defaults.baseURL);
    }

  },
  computed: {
      username() {
          return this.$store.state.username;
      },
       friends() {
          return this.$store.state.friends;
      },
  },
  mounted: function() {
    this.testGet();
    this.newFun();
  }
};
</script>

<style scoped lang="scss">



</style>