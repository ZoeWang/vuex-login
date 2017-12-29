import API from '@/fetch/api'
import http from '@/fetch/request'

export default {
	// 测试获取数据
	getSample (data, callback) {
		http.get(API.urls.sample, data, '', callback)
	}
}