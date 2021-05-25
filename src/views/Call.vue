<template>
  <div class="wrapper call">
   <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
   <h2>Call a friend</h2>
   <div class="wrapper wrapper_call">
        <div class="wrapper call_friends">
          <!--TODO bind to data -->
          <CardCall v-for="(friend,index) in friends" v-bind:key="index" :friend="friend"/>
        </div>
        <div class="wrapper call_group">
          <h2> Make a group call</h2>
          <p>Under development...</p>
          <!--TODO combine with search   <Search/>-->
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import CardCall from "@/components/Card_call.vue";


export default {
  name: "Call",
  components: {
    Assistant,
    CardCall,
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
      return 'Who would you like to call?';
    }
  },
  computed: {
      username() {
          return this.$store.state.username;
      },
      friends() {
          return this.$store.state.friends;
      },
  }
};
</script>

<style scoped lang="scss">


  
</style>