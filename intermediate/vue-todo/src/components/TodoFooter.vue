<template>
  <div class="text-center ma-5">
    <v-btn class="white--text" large color="teal" v-on:click="clearAllTodoItems">
      Clear All
      <v-icon>mdi-history</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TodoFooter",
  methods: {
    ...mapMutations({
      clearAllTodoItems: 'clearAllItems'
    }),
  }
}
</script>

<style scoped>

</style>