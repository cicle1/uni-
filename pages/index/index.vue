<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		{{userInfo}}
		<button type="default" style="width: 300rpx;height: 50rpx;background: #007AFF;line-height: 50rpx;margin-bottom: 20rpx;"
		 @click="add">加</button>
		<button type="default" style="width: 300rpx;height: 50rpx;background: red;line-height: 50rpx;" @click="sub">减</button>
	</view>
</template>

<script>
	//1.引入 mutations actions 提交的第二种方式mapMutations 、mapActions 
	//在method中注册 就可以像本页注册的方法一样使用了
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {

			//this.getTouTiao()
		},
		onShow() {

		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			...mapMutations(['getUserInfoSUBADD', 'getUserInfoSUB']), //从vux中映射出的函数可以直接在dom中@click="方法名"
			...mapActions(['addactions', 'subactions']),

			add() { //加
				//this.$store.commit('getUserInfoSUBADD',2)
				this.getUserInfoSUBADD(2)
			},
			sub() { //减
				this.$util.toast('拉拉')
				this.getUserInfoSUB(2)
			},
			//请求示例
			getTouTiao() {

				let parms = {
					aa: '22',
				}
				this.$Api.getTouTiao(parms).then(res => {
					console.log(res)
				}, err => {})
			},
			//上传图片接口示例
			upload(parms) {
				_self.$Api.upload(parms).then(res => {
					console.log(res)
				}, err => {})
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
