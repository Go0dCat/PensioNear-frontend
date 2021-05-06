<template>
  <div class="help">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Help",
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
      return 'What kind of help do you need?';
    }
  }
};
</script>

<style scoped lang="scss">
  
</style>