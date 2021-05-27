<template>
    <div>
        <Assistant :greet="getGreeting()" :msg="getMessage()"/>
        <Search />
        <div class="wrapper event_cat_wrapper">
           
           <form class="form_wrapper">
               <h1>{{categ.name}}</h1>
                <div class="selection">
                    <div >
                        <select name="event_cat_sort" v-model="event_cat" >
                            <option value="walk">Walk</option>
                            <option value="soccer">Soccer</option>
                            <option value="bike">Bike</option>
                            <option value="others">...</option>
                        </select>
                    </div>
                    <div>
                        <select name="event_sort" v-model="selected" >
                            <option value="today">Today</option>
                            <option value="this_week">This Week</option>
                            <option value="this_month">This Month</option>
                        </select>
                    </div>
                </div>   
           
           </form>
           <div class="card-box" >
                <div v-for="ev in events" :key="ev.index">
                    <CardEvent v-if="ev.category_id === categ.id" v-bind:event="ev" v-bind:when="selected"/>
                </div>
           </div> 
        </div>    
    </div>
    
</template>

<script>
import Assistant from "@/components/Assistant.vue";
import Search from '../components/Search.vue';
import CardEvent from "../components/Card_event.vue";

export default {
    name: "EventCategory",
    components: {
        Assistant,
        Search,
        CardEvent

    },
    props:['myprops'],
    data(){
        return{
            categ: [],
            events: [],
            selected:'today',
            event_cat: 'walk'
        }
    },
    created(){
        this.categ=this.$route.params.data
    },
    methods: {
        getGreeting: function() {
            return 'Hi ' + this.username + '!';
        },
        getMessage: function() {
            return 'What kind of event are you interested in?';
        },
    },
    mounted(){
        this.events = this.$store.state.events;
    }
}
</script>

<style lang="sass" scoped>

</style>