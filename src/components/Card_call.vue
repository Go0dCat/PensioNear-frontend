<template>
    <div class="card_call wrapper">
        <div class="btn_square wrapper wrapper_card_call">
            <div class="wrapper call_friend_about">
                <!-- TODO bind to data --> 
                <div><img alt="user profile image avatar" src="../assets/old-man.svg" /></div>
                <div><p>{{friend}}</p></div>
                
            </div>
            <div class="wrapper call_qactions">
               <div class="btn btn_gray btn_icon icon_settings"><img alt="call icon" src="../assets/call.svg" /></div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name: "Card_call",
    props:{
        friend: String,
    },
    data : function(){
    return{
        username: "test",
    };
  },
};
</script>
<style lang="scss" scoped>
   
</style>