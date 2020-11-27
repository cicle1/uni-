/* *
 * uni支付封装
 * */
export default function requestPayment(result = {}) {
	return new Promise(function(resolve, reject) {
		uni.requestPayment({
			// #ifdef MP-WEIXIN
			appId: result.appId,
			timeStamp: result.timeStamp,
			nonceStr: result.nonceStr,
			package: result.package1,
			signType: result.signType || 'MD5',
			paySign: result.paySign,
			// #endif
			// #ifdef MP-ALIPAY
			orderInfo: result.tradeNo,
			// #endif
			success: function(res) {
				resolve(res)
			},
			fail: function(err) {
				reject(err)
			}
		});

	})
}
