<template>
  <div class="events">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/>
    <Search />
    <div class="wrapper box-wrapper">
      <h2 >Categories</h2>
        <div class="card-buttons">
          <button v-for="category in categories" :key="category.index" @click="updateChosenCategory(category)">{{category.name}}</button> 
        </div>
      <button class="detail-btn">See more</button>          
    </div>

    <div class="wrapper box-wrapper">
      <h2>Calendar</h2>
       <div>
         <form action="" class="form-inline">
           <div>
              <label for="">Events</label>
              <select name="event_sort" v-model="selected" >
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
              </select>
           </div>            
            <label for=""> <input type="checkbox" /> Show my events</label>
         </form>
       </div>
       <div class="event_wrapper">
         <CardEvent v-for="ev in events" :key="ev.index" v-bind:event="ev" v-bind:when="selected"/>
       </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";
import Search from '../components/Search.vue';
import CardEvent from "../components/Card_event.vue";

export default {
  name: "Events",
  components: {
    Assistant,
    Search,
    CardEvent
  },
  data : () => ({
    categories: [],
    events: [],
    selected:'today',
    chosenCategory: [],

  }),
  mounted(){
    this.categories = this.$store.state.categories;
    this.events = this.$store.state.events;

  },

  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'What kind of event are you interested in?';
    },
    updateChosenCategory: function(cat){
      this.chosenCategory = cat;
      this.$router.push({name:"EventCategory", params: {data:this.chosenCategory}})
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