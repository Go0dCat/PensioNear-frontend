<template>
    <div class="card_profile wrapper">
        <div class="btn_square wrapper card_user">
            <div class="card_user_img">
                <img alt="user profile image avatar" src="../assets/grandfather.svg" />
                <p>{{username}}</p>
            </div>
            <div class="card_user_info">
                <!--TODO replace with data-->
                <p>Age: 78 years</p>
                <p>Gender: male </p>
                <p>Likes: poodles</p>
                <p>Umeå, Sweden</p>
            </div>
        </div> 
        <div class="card_edit">
            <p>edit profile</p>
        </div>  
    </div>
</template>
<script>
export default {
    name: "Card_profile",
    props:{
        username: String,
    },
    data : function(){
    return{
      test: "hej",
    };
  },
};
</script>
<style lang="scss" scoped>

</style>