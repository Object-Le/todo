import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutation'
import actions from './actions'
import getters from './getters'
// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },

  mutations,
  actions,
  getters
})

// 3.挂载到vue实例上
export default store