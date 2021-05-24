<template>
  <div id="app">
    <Header/>
    <router-view />

  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default ({
  setup() {
    
  },
  components: {
    Header,
  },
})
</script>

<style lang="scss">
@import "./styles/stylesheet.scss";



</style>
