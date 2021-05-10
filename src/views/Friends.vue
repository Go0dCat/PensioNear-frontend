<template>
  <div class="wrapper friends">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
      <h2> Friend list</h2>
      <div class="wrapper wrapper_friends">
        <div class="wrapper friend_list">
          <!--TODO bind to data -->
          <CardFriend v-for="(friend,index) in friends" v-bind:key="index" :friend="friend.username"/>
        </div>
        <div class="wrapper friend_create">
          <h2> Add new friend</h2>
          <div class="btn btn_round btn_gray"> <img alt="add new friend icon" src="../assets/add-friend.svg" /></div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import CardFriend from "@/components/Card_friend.vue";

export default {
  name: "Friends",
  components: {
    Assistant,
    CardFriend
  },
  data : function(){
    return{
      username: "Bob",
      friends: [ 
        {username:"Agatha"}, {username:"Christine"}, {username:"Bertha"}],
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
    }
  }
};
</script>

<style scoped lang="scss">

</style>