<template>
  <div class="messages">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
    <h2>Messages </h2>
    <p> Under construction... </p>
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
      }
  }
};
</script>

<style scoped lang="scss">
  p, h2 {
    text-align: center;
  }
</style>