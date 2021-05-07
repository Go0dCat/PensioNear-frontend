<template>
  <div class="messages">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Messages",
  components: {
    Assistant,
  },
  data : function(){
    return{
      username: "Bob",
    };
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'Who would you like to message?';
    }
  }
};
</script>

<style scoped lang="scss">
  
</style>