<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
        {{todoItem}}
        <button v-on:click="removeTodoItem(todoItem, index)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data: function() {
    return {
      todoItems: [],
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodoItem: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>