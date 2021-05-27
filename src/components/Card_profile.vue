<template>
    <div class="card_profile wrapper">
        <div class="btn_square wrapper card_user">
            <div class="card_user_img">
                <img  v-if="gender==='male'" alt="user profile image avatar" src="../assets/old-man.svg" />
                    <img  v-else-if="gender==='female'" alt="user profile image avatar" src="../assets/old-woman.svg" />
                    <img  v-else alt="user profile image avatar" src="../assets/flower-pot.svg" />
                <p>{{username}}</p>
            </div>
            <div class="card_user_info">
                <!--TODO replace with data-->
                <p>Age: {{userInfo.age}} years</p>
                <p>Gender: {{userInfo.gender}} </p>
                <p>Likes: <span v-for="(hobby, index) in userInfo.hobbies" v-bind:key="index"><span v-if="hobby.value">{{hobby.name}}<span v-if="index < userInfo.hobbies.length-1">, </span></span></span></p>
                <p>{{userInfo.city}}, {{userInfo.country}}</p>
            </div>
        </div> 
        <div class="card_edit">
             <router-link to="/profile/edit"><p>edit profile</p></router-link>
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
  methods: {

  },
  computed: {
      userInfo() {
          return this.$store.state.userInfo;
      }
  }
};
</script>
<style lang="scss" scoped>

</style>