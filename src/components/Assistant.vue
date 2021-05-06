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
.assistant_wrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 2fr 3fr;
    gap: 1em;
    margin-top: 2em;
    padding:1em;
    align-items:end;

    .assistant_img {
        justify-self: end;
        padding-bottom: .5em;
        img {
            height: 4em;
        }
    } 
    .assistant_text {
        justify-self: start;
        background-image: url("../assets/textbox.svg");
        background-position: center;
        background-repeat: no-repeat; 
        background-size: 80%;
        p {
            padding: 2em;
            margin: 1em;
            margin-left: 3em;
        }
    }  
}

</style>
