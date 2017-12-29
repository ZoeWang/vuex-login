import * as types from './mutation-types'

// 购物车例子
export const addToCart = ({ commit }, product) => {
	if(product.inventory > 0) {
		commit(types.ADD_TO_CART, {
			id: product.id
		})
	}
}

// showmsg
export const showMsg = ({commit}, content, type='error') => {
	commit(types.SHOW_MSG, {content:content, type:type})
}
export const hideMsg = ({commit}) => {
	commit(types.HIDE_MSG)
}