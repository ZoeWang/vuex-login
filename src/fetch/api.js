'use strict'
let api;
if(process.env.NODE_ENV === "development") {
	api = '/api';
}

let WEB_CONFIG = {
	intServiceReqTimeout: 8000,
	queryType: "GET",
	url: "",	//a 标签需要带上域名时修改本参数，默认为空
	version: "1.0", //版本号
	client: "web",  //设备
	accessflag: new Date().getTime(),  //随机标签
	coreHost: "http://core",  // 设置二级域名接口

	urls: {
		sample: api + '/admin/user/findUserById',
		login: api + '/login',
	}
}

export default WEB_CONFIG;