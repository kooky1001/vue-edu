<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem"/>
    <button v-on:click="addTodoItem">+</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data: function() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addTodoItem: function() {
      this.$emit('addItem', this.newTodoItem);
      this.clearTodoItem();
    },
    clearTodoItem: function() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>

</style>