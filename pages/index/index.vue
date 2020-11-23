<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.getTouTiao()
		},
		methods: {
			//请求示例
			getTouTiao() {
				let parms={
					aa: '22',
				}
				this.$Api.getTouTiao(parms).then(res=>{
					console.log(res)
				},err=>{})
			},
			//上传图片接口示例
			upload(parms){
				_self.$Api.upload(parms).then(res=>{
					console.log(res)
				},err=>{})
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
