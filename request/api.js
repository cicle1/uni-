import request from './http.js'
const api = request
export default {
	getUserInfo: (data) => {
		return api.request('/asa/sda', 'POST', data) //接口地址
	},
	upload: (data) => {
		return api.request('/asa/sda', 'POST', data, true) //上传接口地址
	},
}
