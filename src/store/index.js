import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

import login from './modules/login'
import showmsg from './modules/showmsg'



Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		login,
		showmsg
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
})
