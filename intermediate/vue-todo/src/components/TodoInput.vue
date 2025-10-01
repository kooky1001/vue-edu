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
    <CommonModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
      </h3>
      <div slot="body">
        아무것도 입력하지 않았습니다.
      </div>
      <div slot="footer">
        <button class="modal-default-button" @click="showModal = false">
          OK
        </button>
      </div>
    </CommonModal>
  </div>
</template>

<script>
import CommonModal from "@/components/common/CommonModal.vue";

export default {
  name: "TodoInput",
  components: {CommonModal},
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodoItem: function() {
      if (this.newTodoItem !== '') {
        this.$emit('addItem', this.newTodoItem);
        this.clearTodoItem();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearTodoItem: function() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>

</style>