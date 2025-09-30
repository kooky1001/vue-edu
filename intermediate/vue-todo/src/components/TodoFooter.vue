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
      localStorage.clear();
    }
  }
}
</script>

<style scoped>

</style>