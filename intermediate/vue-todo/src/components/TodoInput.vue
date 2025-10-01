<template>
  <div class="text-center">
    <v-row>
      <v-col cols="11">
        <v-text-field solo v-model="newTodoItem" v-on:keyup.enter="addTodoItem"/>
      </v-col>
      <v-col cols="1">
        <v-btn large color="primary" width="100%" v-on:click="addTodoItem">
          <v-icon large>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-row>
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