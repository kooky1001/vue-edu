<template>
  <div>
    <button v-on:click="clearAllTodoItems">clear all</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearAllTodoItems: function() {
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>

</style>