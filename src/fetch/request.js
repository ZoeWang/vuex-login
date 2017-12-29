'use strict'

import axios from 'axios'
import qs from 'qs'
import { getCookie } from '@/utils/loginService'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '';

// POST 传参序列化
// axios.interceptors.request.use(() => {
// 	if(config.method === 'post') {
// 		config.data = qs.stringify(config.data);
// 	}
// 	return config;
// },(error) => {
// 	console.log("错误的传参",'fail');
	
// 	return Promise.reject(error);
// });

// 返回状态判断
// axios.interceptors.response.use((res) => {
// 	if(!res.data.success) {
// 		return Promise.reject(res);
// 	}
// 	return res;
// }, (error) => {
// 	console.log("网络异常", 'fail');
	
// 	return Promise.reject(error);
// });

function setArg(headers) {
	const BOUNDARY = "----WXF"+new Date().getTime();
	headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Accept': 'application/json;charset=UTF-8'
	}
	if(headers === 'permission') {  // 权限
		headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json;charset=UTF-8',
			'Authorization': getCookie()
		}
	
	} else if(headers === 'file') {  // 文件
		headers = {
			'Content-Type': 'multipart/form-data;boundary='+BOUNDARY,
			'Authorization': getCookie()
		}
	} else {
		headers = headers
	}
	// 返回设置的headers 头部
	return headers;
}

function errorMsg(error) {
	if(error.response){
	    //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
	    // console.log(error.response.data);
	    // console.log(error.response.header);
	    console.log(error.response.status);  // 500 404
	    if (error.response.status == 500) {
	    	console.log("服务器错误");
	    }

	    if (error.response.status == 404) {
	    	console.log("找不到页面");
	    }


	}else {
	    //一些错误是在设置请求的时候触发
	    // console.log('Error',error.message);
	}
	// console.log(error.config);
}

export default {
	/**
	url  data  successCallBack 必填
	data 无 可用 {} 代替
	*/
	get: function (url='', params, headers, successCallBack) {
		// 设置请求参数
		let setHeaders = setArg(headers);
		// params 可传空
		// 返回请求数据
		axios({
			url,
			method: 'get',
			params: params,
			headers:  setHeaders,
		}).then(res => {
			successCallBack(res.data);
		}).catch( error => {
			errorMsg(error)
        })
	},

	post: function(url='', data={}, headers, successCallBack, fileArray) {
		let param;
		let setHeaders = setArg(headers);
		// 上传文件类型
		if(headers === 'file') {
			param = new FormData();
			if(!!fileArray) {
				for(var i=0; i<fileArray.length; i++) {
					param.append('files', fileArray[i]);
				}
			}
			for(var j in data) {
				param.append(j, data[j]);
			}

			axios({
				url,
				method: 'post',
				data: param,
				headers: setHeaders,
			}).then(res => {
				successCallBack(res.data);
			}).catch( error => {
				errorMsg(error)
			})

		} else {

			axios({
				url,
				method: 'post',
				data: qs.stringify(data),
				headers: setHeaders,
			}).then(res => {
				successCallBack(res.data);
			}).catch( error => {
				errorMsg(error)
			})
		}

	}
}

