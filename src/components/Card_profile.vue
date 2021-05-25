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
                <p>Age: {{age}} years</p>
                <p>Gender: {{gender}} </p>
                <p>Likes: <span v-for="(hobby, index) in hobbies" v-bind:key="index">{{hobby}}<span v-if="index < hobbies.length-1">, </span></span></p>
                <p>{{city}}, {{country}}</p>
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
  methods: {

  },
  computed: {
      age() {
          return this.$store.state.age;
      },
      gender() {
        return this.$store.state.gender;
      },
      city() {
          return this.$store.state.city;
      },
      country() {
          return this.$store.state.country;
      },
      hobbies() {
          return this.$store.state.hobbies;
      }
  }
};
</script>
<style lang="scss" scoped>

</style>