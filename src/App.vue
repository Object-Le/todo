<template>
  <div id="app">
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/style/global.css'
  import MainHeader from './components/MainHeader/mainheader.vue'
  import MainTodo from './components/mainTodo/maintodo.vue'
  import MainFooter from './components/MainFooter/mainFooter.vue'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainTodo,
      MainFooter,
    },
  }
</script>

<style>
</style>
