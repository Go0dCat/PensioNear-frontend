<template>
  <div class="wrapper friends_new">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
      

      <h2>Advanced search</h2>

      <p>Yet to be implemented</p>

  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

//import axios from 'axios';
//import Search from "@/components/Search.vue";

export default {
  name: "Friends",
  components: {
    Assistant,

  },
  data : function(){
    return{
      test: "Bob", 
      users: [
        {username: "Bob", age: 74},
        {username: "Alice", age: 34}
      ],

    };
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'What kind of friend are you looking for?';
    },


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
  }
};
</script>

<style scoped lang="scss">
  p {
    text-align: center;
  }


</style>