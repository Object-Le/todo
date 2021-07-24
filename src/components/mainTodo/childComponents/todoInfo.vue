<template>
  <div class="todo-info">
    <span class="total">{{ total }} item left</span>
    <div class="tabs">
      <a
        :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
        v-for="(item, index) in states"
        :key="index"
        @click="toggleState(item)"
        >{{ item }}</a
      >
    </div>
    <button class="clear" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    props: {
      total: Number,
    },
    data() {
      return {
        states: ['all', 'active', 'completed'],
        state: 'all',
      }
    },
    methods: {
      toggleState(state) {
        this.state = state
        this.$emit('toggleState', state)
      },

      clearCompleted() {
        this.$emit('clearCompleted')
      },
    },
  }
</script>

<style scoped>
  .todo-info {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    padding: 5px 10px;
    line-height: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .total {
    color: red;
  }

  .tabs {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }

  .btn.primary.border {
    appearance: none;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid rgb(252, 157, 154);
  }
  .actived {
    appearance: none;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(252, 157, 154);
    color: #fff;
  }
  .clear {
    appearance: none;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(131, 175, 155);
    color: #fff;
  }
</style>
