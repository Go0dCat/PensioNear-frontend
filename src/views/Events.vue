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

    <div class="wrapper box-wrapper">
      <h2>Calendar</h2>
       <div>
         <form action="" class="form-inline">
           <div>
              <label for="">Events</label>
              <select name="event_sort" id="">
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
              </select>
           </div>            
            <label for=""> <input type="checkbox" /> Show my events</label>
         </form>
       </div>
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
      test: "Bob",
    };
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'What kind of event are you interested in?';
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
  
</style>