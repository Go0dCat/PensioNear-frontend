<template>
  <div class="events">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/>
    <Search />
    <div class="wrapper box-wrapper">
      <h2 >Categories</h2>
      <div class="card-buttons">
        <button>Sports</button>  
        <button>Sports</button> 
        <button>Sports</button> 
        <button>Sports</button> 
        <button>Sports</button> 
        <button>Sports</button>
        <button>Sports</button> 
        <button>Sports</button>  
      </div>
      <button class="detail-btn">See more</button>          
    </div>
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