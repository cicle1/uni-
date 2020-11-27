/* 
	 vuex
	 页面同步提交修改数据 this.$store.commit('方法名', parms)
	 页面异步提交修改数据 this.$store.commit('方法名', parms)
	 页面取数据 this.$store.state.name
	 
 */
import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state = {
	userInfo: 0, //用户信息
}

const mutations = {
	getUserInfoSUBADD(state, userInfo) { //用户信息+
		state.userInfo += userInfo
	},
	getUserInfoSUB(state, userInfo) { //用户信息-
		state.userInfo -= userInfo
	},
};

const actions = { //异步操作
	addactions(context, parms) {
		//this.$store.dispatch('addactions',parms) 触发actions函数
		//actions只能通过
		setTimeout(() => {
			context.commit('getUserInfoSUBADD', parms)
		}, 1000);

	},
	subactions(context, parms) {
		setTimeout(() => {
			context.commit('getUserInfoSUB', parms)
		}, 1000);
	}
}


const store = new vuex.Store({
	state,
	mutations, //同步操作
	actions //异步操作
})
export default store
