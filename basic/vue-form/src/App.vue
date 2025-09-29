<template>
  <form v-on:submit.prevent="submitForm">
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios  from "axios";

export default {
  name: 'App',
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.password
      }

      axios.post(url, data)
      .then(response => {
        // console.log(response);
        console.log('success', response.data);
      })
      .catch(error => {
        console.log('error', error);
      })
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
