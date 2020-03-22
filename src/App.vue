<template>
  <div id="app">
    <Movies/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Movies from "./components/Movies.vue";


export default {
  name: "App",
  components: {
    Movies
  }
};
</script>

<style>
</style>
