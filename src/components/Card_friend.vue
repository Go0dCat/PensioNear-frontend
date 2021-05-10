<template>
    <div class="card_friend wrapper">
        <div class="btn_square wrapper wrapper_card_friend">
            <div class="wrapper card_friend_about">
                <div><p>{{friend}}</p></div>
                <!-- TODO bind to data --> 
                <div><img alt="user profile image avatar" src="../assets/grandmother.svg" /></div>
                
            </div>
            <div class="wrapper card_friend_qactions">
               <div class="btn btn_gray btn_icon icon_settings"><img alt="call icon" src="../assets/call.svg" /></div>
               <div class="btn btn_gray btn_icon icon_settings"><img alt="message icon" src="../assets/message.svg" /></div>
               <div class="btn btn_gray btn_icon icon_settings"><img alt="settings icon" src="../assets/settings.svg" /></div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name: "Card_friend",
    props:{
        friend: String,
    },
    data : function(){
    return{
        username: "yo",
    };
  },
};
</script>
<style lang="scss" scoped>
   
</style>