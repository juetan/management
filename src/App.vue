<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <page-login></page-login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import pageLogin from '@/pages/login';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    pageLogin
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  overflow: hidden;
}
</style>
