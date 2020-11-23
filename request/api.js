/* 
* @author 南风number
* 请求接口地址
*/
const api = require('./http.js')

module.exports= {
	getTouTiao: (data) => {
		return api.request({
			url: '****',
			method: 'POST',
			data: data
		}) //接口地址
	},
	upload: (data) => {
		return api.request({
			url: '****',
			isUpload: true,
			method: 'POST',
			data: data, //上传接口地址
		})
	},
}
