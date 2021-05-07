<template>
  <div class="events">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import Search from '../components/Search.vue';

export default {
  name: "Help",
  components: {
    Assistant,
    Search
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
      return 'What kind of event are you interested in?';
    }
  }
};
</script>

<style scoped lang="scss">
  
</style>