import Vue from 'vue'
import App from './App'

import Api from 'request/api.js'

Vue.config.productionTip = false

Vue.prototype.$Api = Api//挂载全局

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
