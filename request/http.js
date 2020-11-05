/* 
		@parms url 接口地址
		@parms method 请求方式
		@parms data 参数
 */

const BASE_URL = "https://baidu.com" //公共请求头
const TOKEN = uni.getStorageSync('TOKEN') //TOKEN

const request = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + url, //仅为示例，并非真实接口地址。
			data: data,
			method: method,
			header: {//请求头可自定义
				'Content-Type': 'application/x-www-form-urlencoded',
				'X-Access-Token': TOKEN
			},
			success: (res) => {//具体捕获请看自己接口返回的形式
				if (res.data.code == 200 || res.data.code == 0 || res.data.code == 1204) {
					resolve(res)
				} else {
					uni.showModal({
						title: '提示',
						showCancel: false,
						content: res.data.message,
						success(res) {
							if (res.confirm) {
								// ////console.log('用户点击确定')
								uni.navigateBack({})
							} else if (res.cancel) {
								// ////console.log('用户点击取消')
							}
						}
					})
				}
			},
			fail(error) {
				reject(error)
			},
			complete() {

			}
		});
	})
}

export default {
	request
}
