<template>
  <div class="home wrapper">
    <Assistant name="Bob"/> 
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Assistant,
  },
};
</script>
