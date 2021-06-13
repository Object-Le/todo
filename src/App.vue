
<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/style/global.styl'

  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      //组件名(对应template里面的组件标签)：组件对象
      MainHeader: MainHeader,
      MainTodo: MainTodo,
      MainFooter: MainFooter,
    },
  }
</script>

<style lang="stylus" scoped></style>
