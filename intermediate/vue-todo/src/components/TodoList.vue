<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
        <input type="checkbox" v-bind:checked="todoItem.completed" v-on:click="completeTodoItem(todoItem)"/>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
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
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        this.todoItems.push(JSON.parse(localStorage.getItem(key)));
      }
    }
  },
  methods: {
    removeTodoItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    completeTodoItem: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      // localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
.textCompleted {
  text-decoration: line-through;
}
</style>