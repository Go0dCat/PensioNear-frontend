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
        <div class="btn btn_gray btn_icon icon_settings" v-on:click="$refs.modalName.openModal()"><img alt="settings icon" src="../assets/settings.svg" /></div>
        <div class="btn btn_gray icon_logout" v-on:click="confirm('Logout not yet available')">Logout</div>
      </div> 

    </div>

    <Modal ref="modalName" :title="getModTitle()" :msg="getModMsg()"/> 
  </div>

</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import CardProfile from "@/components/Card_profile.vue";
import Modal from "@/components/Modal_temp.vue";

export default {
  name: "Profile",
  components: {
    Assistant,
    CardProfile,
    Modal
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
    },
    getModTitle: function() {
      return `Settings`;
    },
    getModMsg: function() {
      return 'This functionality is yet to be implemented.';
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