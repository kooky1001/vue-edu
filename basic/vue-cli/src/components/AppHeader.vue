<script>
export default {
  name: 'AppHeader',
  props: ['propsdata'],
  methods: {
    sendEvent: function () {
      this.$emit('renew');
    }
  }
}
</script>

<template>
  <header>
    <h2>{{propsdata}}</h2>
    <button v-on:click="sendEvent">Send</button>
  </header>
</template>

<style scoped>

</style>