/**
 * 
 * 所有工具方法都从这里统一导出
 * 
 * */
import requestPayment from './function/requestPayment.js'
import toast from './function/toast.js'


export default {
	pay: requestPayment,//uni支付封装
	toast,//消息提示uni.showToast封装
}
