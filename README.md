# to-do

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# todo

![todo](F:/litter/picture/todo.png)

#### 1. 项目功能：

新增、删除、查找、修改

#### 监听todoData数据里面的数据，完成统计功能

```
    watch: {
      todoData: {
        //deep：true表示监听每一个属性的变化
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (item) => item.completed == false
          ).length
        }
      }
    },
```

#### 过滤数据

```js
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
```

#### 通过`localStorage`对数据进行本地永久保存

在输入框里按下enter后加载保存的数据，在maintodo.vue里：

```js
methods:{
      addTodo() {
        if (this.content === '') return
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
}
```





