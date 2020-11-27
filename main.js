import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.prototype.$store = store //vuex挂载全局

import util from 'utils/index.js'
Vue.prototype.$util = util //工具挂载全局

import Api from 'request/api.js'
Vue.prototype.$Api = Api //请求方法挂载全局

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
