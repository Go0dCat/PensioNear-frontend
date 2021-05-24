<template>
    <div class="card_call wrapper">
        <div class="btn_square wrapper wrapper_card_call">
            <div class="wrapper call_friend_about">
                <!-- TODO bind to data --> 
                <div>
                    <img  v-if="friend.gender==='male'" alt="user profile image avatar" src="../assets/old-man.svg" />
                    <img  v-else-if="friend.gender==='female'" alt="user profile image avatar" src="../assets/old-woman.svg" />
                    <img  v-else alt="user profile image avatar" src="../assets/flower-pot.svg" />
                </div>
                <div><p>{{friend.username}}</p></div>
                
            </div>
            <div class="wrapper call_qactions">
               <div class="btn btn_gray btn_icon icon_settings" v-on:click="$refs.modalName.openModal()"><img alt="call icon" src="../assets/call.svg" /></div>
            </div>
        </div> 

        <Modal ref="modalName" :title="getModTitle()" :msg="getModMsg()"/> 
    </div>
</template>
<script>
import Modal from "@/components/Modal_temp.vue";

export default {
    name: "Card_call",
    components: {
        Modal,
    },
    props:{
        friend: Array,
    },
    data : function(){
        return{
            test: "test",
        };
    },
    methods:{
        getModTitle: function() {
        return `Calling ${this.friend.username}...`;
        },
        getModMsg: function() {
        return 'The call function is yet to be implemented.';
        }
    }
};
</script>
<style lang="scss" scoped>
   
</style>