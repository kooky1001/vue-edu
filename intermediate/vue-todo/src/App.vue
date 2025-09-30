<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput v-on:addItem="addOneItem"/>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:completeItem="completeOneItem"/>
    <TodoFooter v-on:clearAll="clearAllItems"/>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
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
    addOneItem: function(todoItem) {
      const data = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(data));
      this.todoItems.push(data);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    completeOneItem: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      // localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
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
