<template>
  <div class="wrapper messages">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
    <h2>Messages </h2>
  <div class="wrapper wrapper_messages">
    <div class="msg_friendlist">
      <CardMsg v-for="(friend,index) in friends" v-bind:key="index" :friend="friend"/>
    </div>
    <div class="chat">
      <div class="wrapper chat_history" >
        <img alt="chat box img" src="../assets/msg_box.png" />
      </div>
      <!--div class="chat_input">
        <div>text field</div>
        <div> btn</div>
      </div-->
    </div>
  </div>

  </div>
  
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import CardMsg from "@/components/Card_msg.vue";

export default {
  name: "Messages",
  components: {
    Assistant,
    CardMsg
  },
  data : function(){
    return{
      test: null,
    };
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'Who would you like to message?';
    }
  },
  computed: {
      username() {
          return this.$store.state.username;
      },
      friends() {
          return this.$store.state.friends;
      }
  }
};
</script>

<style scoped lang="scss">


</style>