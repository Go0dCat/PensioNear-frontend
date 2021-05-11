<template>
  <div id="app">
    <header>
        <h1> PensioNear </h1>

      <div id="headerR" class="wrapper">
        <router-link to="/"><div class="btn btn_round"> <p class="btn_text">Home</p> </div></router-link> 
        <router-link to="/help"><div class="btn btn_round"> <p class="btn_text">Help</p> </div></router-link>
        <router-link to="/profile"><div class="btn btn_round"> <p class="btn_text">Profile</p> </div></router-link>
      </div>

    </header>

    <router-view />

  </div>
</template>

<style lang="scss">
@import "./styles/stylesheet.scss";



</style>
