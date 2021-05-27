<template>
    <div class="card_event">
        <div class="card">
            <div class="card_info">
                <div class="title">
                    <h4>{{event.name}}</h4>
                </div>                
                <p>{{event.time}} | {{event.when}}</p>
            </div>            
            <button type="" v-on:click="$refs.modalName.openModal()">Join</button>
        </div>
        <Modal ref="modalName" :title="getModTitle()" :msg="getModMsg()"/>      
    </div>   
</template>
<script>
import Modal from "@/components/Modal_temp.vue";

export default {
    name: "Card_event",
    components: {
        Modal,
    },
    props:{
        event: Object,
        when: String,
    },
    data : function(){
    return{
        username: "test",
    };
  },
  methods:{
        getModTitle: function() {
        return `Joining ...`;
        },
        getModMsg: function() {
        return 'The join function is yet to be implemented. ';
        }
    }
};
</script>
<style lang="scss" scoped>
   .modal {
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    background-color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.26));
    height:300px;
    width:300px;
    white-space:pre-wrap;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding:1em;
    justify-items: center;
}
</style>