<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{ todo.content }}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    methods: {
      delItem() {
        this.$emit('del', this.todo.id)
      },
    },
  }
</script>

<style scoped>
  .todo-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .todo-item:hover > button::after {
    content: 'x';
    font-size: 24px;
    color: rgb(252, 157, 154);
  }

  input {
    appearance: none;
    border: none;
    /* border: solid 1px #ebc; */
    /* border-radius: 30px; */
    outline: none;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  input::after {
    content: url('../../../assets/images/checked.svg');
  }
  input:checked::after {
    content: url('../../../assets/images/unchecked.svg');
  }

  label {
    flex: 1;
    transition: color 0.4s;
  }

  button {
    width: 40px;
    background-color: transparent;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .completed > label {
    color: #d9d9d9;
    text-decoration: line-through;
  }
</style>