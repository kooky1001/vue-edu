<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <AppHeader v-bind:propsdata="str" v-on:renew="renewStr"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppHeader
  },
  data: () => ({
    str: 'HelloWorld',
  }),
  methods: {
    renewStr: function () {
      this.str = 'HiWorld';
    }
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
