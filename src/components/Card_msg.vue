<template>
    <div class="card_msg wrapper" > 
        <div class="btn wrapper msg_friend" v-on:click="$refs.modalName.openModal()">
            <div class="msg_friend_img">
                <img  v-if="friend.gender==='male'" alt="user profile image avatar" src="../assets/old-man.svg" />
                <img  v-else-if="friend.gender==='female'" alt="user profile image avatar" src="../assets/old-woman.svg" />
                <img  v-else alt="user profile image avatar" src="../assets/flower-pot.svg" />
            </div>
            <div class="msg_friend_username"><b>{{friend.username}}</b></div>
            
        </div> 
        <Modal ref="modalName" :title="getModTitle()" :msg="getModMsg()"/> 
        
    </div>
</template>
<script>
import Modal from "@/components/Modal_temp.vue";

export default {
    name: "Card_msg",
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
        return `Messaging ${this.friend.username}...`;
        },
        getModMsg: function() {
        return 'The message function is yet to be implemented.';
        }
    }
};
</script>
<style lang="scss" scoped>
    
   
</style>