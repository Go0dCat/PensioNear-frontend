<template>
  <div class="profile wrapper">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
    <h2>Profile</h2>
    <div class="wrapper wrapper_profile">
      <div class="wrapper">
        <!--TODO bind username to data-->
        <CardProfile :username="this.username"/>
        
      </div>
      <div class="wrapper wrapper_settings">
        <div class="btn btn_gray btn_icon icon_settings"><img alt="settings icon" src="../assets/settings.svg" /></div>
        <div class="btn btn_gray icon_logout">Logout</div>
      </div> 

    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import CardProfile from "@/components/Card_profile.vue";

export default {
  name: "Profile",
  components: {
    Assistant,
    CardProfile
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
      return 'Here you can update your profile.';
    }
  },
  computed: {
      username() {
          return this.$store.state.username;
      },
      
  }
};
</script>

<style scoped lang="scss">



  
</style>