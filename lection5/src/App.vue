<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CulcFunc />
  </div>
</template>

<script>
import CulcFunc from './components/CulcFunc.vue';


export default {
  name: 'App',
  components: {
    CulcFunc
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
