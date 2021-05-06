<template>
  <div class="home">
    <img class="assistant" alt="smily face" src="../assets/back.svg" />
    
    
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
