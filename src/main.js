//1.创建vue根实例
import Vue from 'vue'
// import { component } from 'vue/types/umd'

//导入App组件
import App from './App.vue'

// 2.挂载app组件
//用el:'#app'代管index里面的<div id="app"></div>的内容
new Vue({
    el: '#app',
    components: {
        //组件名：组件对象
        App: App
    },
    //渲染App,这里的App相当于components中定义的组件名
    template: '<App/>'
})
