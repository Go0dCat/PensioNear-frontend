<template>
    <div class="wrapper assistant_wrapper">
        <div class="assistant_img"><img alt="smily face" src="../assets/back.svg" /></div>
        <div class="assistant_text"><p> Hi {{name}}! <br> What would you like to do now?</p></div>
    </div>

</template>

<script>
export default {
  name: "Assistant",
  props: {
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
