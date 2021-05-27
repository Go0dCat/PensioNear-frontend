<template>
    <div class="card_friend wrapper">
        <div class="btn_square wrapper wrapper_card_friend">
            <div class="wrapper card_friend_about">
                <div><p>{{user.username}}</p><p>{{user.age}} years</p></div>
                <!-- TODO bind to data --> 
                <div>
                    <img  v-if="user.gender==='male'" alt="user profile image avatar" src="../assets/old-man.svg" />
                    <img  v-else-if="user.gender==='female'" alt="user profile image avatar" src="../assets/old-woman.svg" />
                    <img  v-else alt="user profile image avatar" src="../assets/flower-pot.svg" />
                </div>
                
            </div>
            <div class="wrapper card_friend_add">
                <div v-on:click="$refs.modalName.openModal()" class="btn btn_round btn_round_small btn_gray"> <img alt="information icon" src="../assets/information.svg" /></div>
               <div v-on:click="$refs.modalName.openModal()" class="btn btn_gray btn_icon_long"><img alt="add icon" src="../assets/add-friend.svg" /></div>
            </div>
        </div>  
        <Modal ref="modalName" :title="getModTitle()" :msg="getModMsg()"/> 
    </div>
</template>
<script>
import Modal from "@/components/Modal_temp.vue";

export default {
    name: "Card_friend",
    components: {
        Modal
    },
    props:{
        user: Object,
    },
    data : function(){
        return{
            username: "test",
        };
    },
    methods: {
        getModTitle: function() {
        return `Not available`;
        },
        getModMsg: function() {
        return 'This function is yet to be implemented.';
        }
    }
};
</script>
<style lang="scss" scoped>
.card_friend_add {
    grid-template-columns: 1fr 3fr;
    justify-items: center;
    column-gap: 1rem;
    
    .btn_icon_long {
        padding: 0 3em;
    }
}


   
</style>