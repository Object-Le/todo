<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="等不是办法，干才有希望！"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handelDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearCompleted="handleClear"
    ></todo-info>
  </div>
</template>

<script>
  import TodoItem from './childComponents/todoItem.vue'
  import TodoInfo from './childComponents/todoInfo.vue'
  let id = 0

  export default {
    name: 'MainTodo',

    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all',
      }
    },

    methods: {
      //点击添加输入框的内容
      addTodo() {
        if (this.content === '') return
        // this.todoData.unshift({
        //   id: id++,
        //   content: this.content,
        //   completed: false,
        // })
        // this.content = ''

        //改1
        let data = this.getData()
        data.unshift({
          id: id++,
          content: this.content,
          completed: false,
        })
        this.saveData(data)
        this.todoData = data
        this.content = ''
      },
      //删除 item
      handelDeleteItem(id) {
        //如果找到下标，删除一个元素
        this.todoData.splice(
          //item就是点击X时的那整条数据，找到这个数据的下标再删除
          this.todoData.findIndex((item) => item.id === id),
          1
        )
      },

      // Info里的all,active和completed点击就触发的
      handleToggleState(state) {
        this.filter = state
      },

      //清空
      handleClear() {
        this.todoData = this.todoData.filter((item) => item.completed == false)
      },

      //保存到本地
      saveData(data) {
        localStorage.setItem('todoData', JSON.stringify(data))
      },

      //获取本地数据
      getData() {
        let data = localStorage.getItem('todoData')
        if (data != null) {
          return JSON.parse(data)
        } else {
          return []
        }
      },
    },

    //监听todoData数据里面的数据，完成统计功能
    watch: {
      todoData: {
        //deep：true表示监听每一个属性的变化
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (item) => item.completed == false
          ).length
        },
      },
    },

    computed: {
      filterData() {
        switch (this.filter) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter((item) => item.completed == false)
            break
          case 'completed':
            return this.todoData.filter((item) => item.completed == true)
            break
        }
      },
    },
    components: {
      TodoItem,
      TodoInfo,
    },
    created() {
      this.todoData = this.getData()
    },
  }
</script>

<style scoped>
  .main-todo {
    margin: 0 auto;
    width: 600px;
    background-color: #fff;
    box-shadow: 0 0 5px #666;
    border-radius: 20px;
  }

  .add-todo {
    padding: 16px 16px 16px 36px;
    width: 80%;
    font-size: 24px;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    outline: none;
  }
</style>