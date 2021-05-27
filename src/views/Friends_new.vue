<template>
  <div class="wrapper friends_new">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
      <Search/>
      <div class="w_btn"><router-link to="/friends/search/advanced"><p class="btn btn_gray">Advanced search</p></router-link></div>
      <div class="line"></div>
      <h2>Recommendations</h2>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import Search from "@/components/Search.vue";
//import axios from 'axios';
//import Search from "@/components/Search.vue";

export default {
  name: "Friends",
  components: {
    Assistant,
    Search
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
      return 'What kind of friend are you looking for?';
    },

  },
  computed: {
      username() {
          return this.$store.state.username;
      },
       friends() {
          return this.$store.state.friends;
      },
  },
  mounted: function() {
    //this.testGet();
  }
};
</script>

<style scoped lang="scss">
.friends_new {

  .btn_gray {
    width: 100%;
    
  }
  .w_btn {
    justify-self: center;
    width: 20%;
  }
}

.line {
  margin: 2em 0 1em 0;
  height: 2px;
  justify-self: center;
  width:60%;
  background-color: rgba(0, 0, 0, 0.479);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}



</style>