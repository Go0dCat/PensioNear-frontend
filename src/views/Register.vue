<template>
  <div class="login wrapper">
    <Assistant :greet="getGreeting()" :msg="getMessage()"/> 

    <div class="wrapper">
        <!--add LOGIN here-->
        <h2>Register new user</h2>
        <div class="w_form wrapper"> <!--NOTE you can put oauth code inside this div, replace the dummy form if you want/need-->   
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <br><br>
                <label for="password1">Password:</label>
                <input type="password1" id="password1" name="password1">
                <br><br>
                <label for="password2">Reenter password:</label>
                <input type="password2" id="password2" name="password2">
                <br><br><br>
                <input type="submit">
            </form>
            <br><br>
            <p>Already have a user?</p>
             <router-link to="/"><p class="form_text btn">Go back to log in</p></router-link>
        </div>
    </div>

  </div>
</template>



<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Register",
  components: {
    Assistant,
  },
  data : function(){
    return{
      username: null,
    };
  },
  methods: {
    getGreeting: function() {
      return 'Welcome!';
    },
    getMessage: function() {
      return 'Create a new user.';
    }
  }
}
</script>

<style scoped lang="scss">
//Styling found in styles/stylesheet.scss
//found in class .w_form (sorted alphabetically)
  
</style>
