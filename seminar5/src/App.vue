<template>
  <div id="app">
    <authentication-comp @loginAus="isAuth = true" :isAuth="isAuth"></authentication-comp>
    <ShoppingCart />
    <ShoppingCartNew />
    <MortgageCalc />

  </div>
</template>
  
<script>
import AuthenticationComp from './components/AuthenticationComp.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import ShoppingCartNew from './components/ShoppingCartNew.vue'
import MortgageCalc from './components/MortgageCalc.vue'

export default {
  name: 'App',
  data() {
    return {
      isAuth: false
    }
  },
  components: {
    AuthenticationComp,
    ShoppingCart,
    ShoppingCartNew,
    MortgageCalc
  }
}
</script>
  
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>