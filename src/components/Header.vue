<template>
    <header v-if="username!==null">
        <h1> PensioNear </h1>
        <div id="headerR" class="wrapper">
            <!--TODO fix so that home + profile is shown when logged in, and -->
            <router-link to="/home"><div class="btn btn_round"> <p class="btn_text">Home</p> </div></router-link> 
            <!--router-link to="/help"><div class="btn btn_round"> <p class="btn_text">Help</p> </div></router-link--> <!--TODO fix when login is done-->
            <router-link to="/"><div v-if="true" class="btn btn_round"> <p class="btn_text">Login</p> </div></router-link>
            <router-link to="/profile"><div class="btn btn_round"> <p class="btn_text">Profile</p> </div></router-link>
        </div>

    </header>

    <header v-else>
        <h1> PensioNear </h1>
        <div id="headerR" class="wrapper">
        <!--TODO fix so that home + profile is shown when logged in, and -->
            <router-link to="/home"><div v-show="true" class="btn btn_round"> <p class="btn_text">Home</p> </div></router-link> 
            <router-link to="/help"><div class="btn btn_round"> <p class="btn_text">Help</p> </div></router-link>
            <router-link to="/"><div class="btn btn_round"> <p class="btn_text">Login</p> </div></router-link>
        </div>

    </header>
</template>


<script>
export default {
  name: "Header",
  props: {
    msg: String,
    greet: String,
  },
  data : function(){
    return{
      test: null,
    };
  },
  methods: {
  },
  computed: {
      username() {
          return this.$store.state.username;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
