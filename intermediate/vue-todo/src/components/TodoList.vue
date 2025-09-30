<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
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
  props: ['propsdata'],
  methods: {
    removeTodoItem: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    completeTodoItem: function(todoItem) {
      this.$emit('completeItem', todoItem);
    }
  }
}
</script>

<style scoped>
.textCompleted {
  text-decoration: line-through;
}
</style>