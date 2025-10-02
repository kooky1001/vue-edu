<template>
  <div class="text-center">
    <h2 class="mb-5" v-on:click="showHeader">
      {{this.$store.state.headerText}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  methods: {
    showHeader () {
      this.$store.dispatch("showHeaderText");
    }
  }
}
</script>

<style scoped>
</style>