<template>
  <div class="text-center ma-5">
    <v-btn class="white--text" large color="teal" v-on:click="clearAllTodoItems">
      Clear All
      <v-icon>mdi-history</v-icon>
    </v-btn>
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