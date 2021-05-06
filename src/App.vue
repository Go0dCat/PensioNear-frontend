<template>
  <div id="app">
    <header>
      <h1> PensioNear </h1>

      <div id="headerR" class="wrapper w_2fr">
        <div class="btn btn_round"> <p class="btn_text">Help</p> </div>
        <div class="btn btn_round"> <p class="btn_text">Profile</p> </div>
      </div>

    </header>
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  display:grid;
  grid-template-columns: 1fr;
  
}
body {
  margin: 0;
  padding: 0;
  width: 100vb;
  min-height: 100vh;
}

.btn {
  display: grid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.26));
}

.btn_round {
  padding: 1em;
  border-radius: 50%;
  width: 2em;
  height: 2em;
}

.btn_text {
  text-align: center;
  display: inline;
}

header {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vb;
  min-height: 1em;
  margin: 0;
  top: 0;
  padding-top: 0.1em;
  padding-left:2em;
  padding-right:2em;
  background: rgba(213, 231, 175, 0.76);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#headerR {
  grid-template-columns:  4fr 1fr;
  gap:5px;
  text-align: center;
  justify-items: right;
  align-items: center;
  padding-right: 1em;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.wrapper {
  display: grid;
}
</style>
