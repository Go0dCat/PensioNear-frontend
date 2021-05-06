<template>
  <div id="app">
    <header>
      <h1> PensioNear </h1>

      <div> Help </div>
      <div> Profile </div>

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
  
}
body {
  margin: 0;
  padding: 0;
}

header {
  background-color: #D5E7AF;
  width: 100%;
  min-height: 1em;
  margin: 0;
  top: 0;
  padding-top: 0.1em;
  padding-left:2em;
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
</style>
