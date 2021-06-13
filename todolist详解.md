## 事件传递

子组件可以定义事件名字，然后触发时传给子组件进行处理，传递方法：
**子组件： **`TodoItem.vue` ,自定义的事件为`del`, 提交`del`事件到父组件

```js
method(){
	delItem(){
		this.$emit('del',this.todo.id)
	}
}
```

**父组件：** `MainTodo.vue`，当遇到`del`事件时调用`handleDeleteItem()`处理

```js
   <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handelDeleteItem"
    ></todo-item>
```

再写`handleDeleteItem()`方法

```js
 handelDeleteItem(id) {
        //如果找到下标，删除一个元素
        this.todoData.splice(
          //item就是点击X时的那整条数据，找到这个数据的下标再删除
          this.todoData.findIndex((item) => item.id === id),1)
      },
```

