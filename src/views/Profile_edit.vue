<template>
    <div class="wrapper edit_profile">
      <Assistant :greet="getGreeting()" :msg="getMessage()"/> 
      <h2>Profile</h2>
      <div class="w_form wrapper">
        <form>
          <div class="wrapper">
            <!--Could probably be replaced with a v-for-->
            <h3>Info</h3>
            <div>
            <span>Gender: </span>
              <select v-model="userInfo.gender">
                <option v-for="(gender, index) in genderOptions" v-bind:key="index" v-bind:value="gender">
                  {{ gender }}
                </option>
              </select>
            </div>
            <div>
              <p>City</p>
              <input class="input_inset" v-model="userInfo.city" placeholder="Write your city here">
            </div>
            <div>
              <p>Country</p>
              <input class="input_inset" v-model="userInfo.country" placeholder="Write your country here">
            </div>
            <h3>Hobbies</h3>
            <div class="wrapper w_checkbox">
              <div v-for="(option, index) in hobbyOptions" v-bind:key="index">
                <input type="checkbox" v-model="option.value"><label>{{option.hobby}} </label>
              </div>            
            </div>
            <br>
            <input class="btn btn_gray" type="submit">
          </div>
        </form>
      </div>
      
    </div>

</template>

<script>
import Assistant from "@/components/Assistant.vue";

export default {
  name: "EditProfile",
  props: {

  },
  data : function(){
    return{
      genderOptions: ["male", "female", "non-binary", "other"],
      newUserInfo: null,
      hobbyOptions: [
        {hobby: "poodles", value: true},
        {hobby: "cats", value: false},
        {hobby: "gardening", value: true},
        {hobby: "food", value: false},
        {hobby: "politics", value: false},
        {hobby: "sports", value: false},
        {hobby: "food", value: false},
        {hobby: "traveling", value: true}
      ],
      test: {stuff:"test", key: true}
    };
  },
  components: {
    Assistant,
  },
  methods: {
    getGreeting: function() {
      return 'Hi ' + this.username + '!';
    },
    getMessage: function() {
      return 'Edit your profile here.';
    },
  },
  computed: {
      username() {
          return this.$store.state.username;
      },
      userInfo() {
          return this.$store.state.userInfo;
      }
      
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  text-align: center;
}


.w_form {
  padding-top:0;
  form {
    width: 100%;
    display: grid;
    margin-top:0;
    .wrapper {
      grid-template-columns: 1fr;
      gap:.5em;
      width: 90%;
      justify-self: center;
      justify-items: center;

      p {
        text-align: center;
      }

    
    }

    .input_inset {
      box-shadow:inset 0 0 2px 2px rgba(0, 0, 0, 0.26);
    }
    .w_checkbox {
      grid-template-columns: repeat(2,1fr);
      justify-items: stretch;

      div {
        display: grid;
        grid-template-columns: 1fr 2fr;
        
      }
    }
  }
}



</style>