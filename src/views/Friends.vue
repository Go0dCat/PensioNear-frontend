<template>
  <div class="friends">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Friends",
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
      return 'Here are all your friends listed!';
    }
  }
};
</script>

<style scoped lang="scss">
  
</style>