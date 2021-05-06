<template>
  <div class="home wrapper">
    <Assistant name="Bob"/> 
    <div class="wrapper box_container">
       <router-link to="/messages"><div class="btn btn_square"> <p class="btn_text">Messages</p> </div></router-link> 
       <router-link to="/call"><div class="btn btn_square"> <p class="btn_text">Call</p> </div></router-link> 
       <router-link to="/events"><div class="btn btn_square"> <p class="btn_text">Events</p> </div></router-link> 
       <router-link to="/friends"><div class="btn btn_square"> <p class="btn_text">Friends</p> </div></router-link> 
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import Assistant from "@/components/Assistant.vue";

export default {
  name: "Home",
  components: {
    Assistant,
  },
};
</script>

<style scoped lang="scss">
  .btn_square {
    background: rgba(213, 231, 175, 0.76);
  }

  .home .box_container {
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
    margin-left: 8em;
    margin-right: 8em;
    margin-top: 4em;

    .btn_square {
      padding: 2em;
    }
  }
</style>
