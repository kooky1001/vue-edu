<template>
  <v-card>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" v-bind:class="{textCompletedLine: todoItem.completed}">
          <v-row>
            <v-col cols="1">
              <v-checkbox v-bind:input-value="todoItem.completed" v-on:click="completeTodoItem(todoItem)"/>
            </v-col>
            <v-col cols="10" class="text-center my-5">
              <v-input v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</v-input>
            </v-col>
            <v-col cols="1">
              <v-btn class="ml-3" large color="warning" width="80%" v-on:click="removeTodoItem(todoItem, index)">
                <v-icon large>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
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

.textCompletedLine {
  //background-color: blue;
}
</style>