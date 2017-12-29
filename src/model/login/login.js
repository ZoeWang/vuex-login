import API from '@/fetch/api'
import http from '@/fetch/request'

export default {
	login (data, callback) {
		http.post(API.urls.login, data, '', callback)
	},

	userInfo(data, callback) {
		http.get(API.urls.userInfo, data, 'permission', callback)
	}
}