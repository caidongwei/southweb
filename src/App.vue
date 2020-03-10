<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from "./components/header"
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
