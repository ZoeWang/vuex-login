import model from 'model/login/login'
import * as types from '../mutation-types'
// import { showMsg } from '../actions'
// import router from '@/router'
// import { Base64 } from 'js-base64'
import storage from '@/utils/storage'
import { getCookie,saveCookie,signOut, isLogin } from '@/utils/loginService'

const state = {
	isLogin: isLogin(),
	token: getCookie('token') || null,
	user: null
}

const actions = {
	// 退出登录
	logout({ commit }) {
		signOut()
		commit(types.LOGOUT_USER)
	},
	// 用户登录
	login({ commit }, res) {
		let token = res.data[1]
		// console.log("token====",token);
		saveCookie('token', token)
		storage.set('user', JSON.stringify(res.data))
		commit(types.LOGIN_SUCCESS, {token: token})

	},

	// 请求用户信息
	getUserInfo({ commit }, id) {
		let data = {
			id: id
		}
		model.userInfo(data, (res => {
			if(res.status == 200) {
				commit(types.USERINFO_SUCCESS, {user: res.data})
			} else {
				commit(types.USERINFO_FAILURE, {user: res.data})
			}
		}))
	}

}

const getters = {
	getUserInfo: state => state.user,
	isLogin: state => state.isLogin,
	token: state => state.token
}

const mutations = {
	[types.LOGIN_SUCCESS](state, action) {
		state.token = action.token
	},

	[types.USERINFO_SUCCESS](state, action) {
		state.user = action.user
	},

	[types.USERINFO_FAILURE](state, action) {
		state.user = null
	},

	[types.LOGOUT_USER](state, action) {
		state.user = null
		state.token = null
		state.isLogin = false
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}
