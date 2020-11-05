import request from './http.js'
const api=request
export default {
	getUserInfo: (data) => { 
		return api.request('/asa/sda', 'POST', data)//接口地址
	},
}