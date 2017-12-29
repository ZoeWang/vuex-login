import * as types from '../mutation-types'

const state = {
	message: {
		type: '',
		content: '',
		title: ''
	}
}

const mutations = {
	[types.SHOW_MSG](state, action) {
		state.message = {...action}
	},
	[types.HIDE_MSG](state, action) {
		state.message = {
			type: '',
			content: '',
			title: ''
		}
	}
}


export default {
	state,
	mutations
}