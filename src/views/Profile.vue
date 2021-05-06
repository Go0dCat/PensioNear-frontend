<template>
  <div class="profile">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
  </div>

</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Profile",
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
      return 'Here you can update your profile.';
    }
  }
};
</script>

<style scoped lang="scss">
  
</style>