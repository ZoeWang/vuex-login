import Cookies from 'js-cookie'

let cookieConfig = {
	expires: 7,
	path: '',
	maxAge: 365*24*60*60,
	domain: ''
}

export function saveCookie(name, value) {
	Cookies.set(name, value, cookieConfig)
}

export function getCookie(name) {
	return Cookies.get(name)
}

export function removeCookie(name) {
	Cookies.remove(name, cookieConfig)
}

export function signOut() {
	Cookies.remove('token', cookieConfig)
}

export function isLogin() {
	return !!Cookies.get('token')
}

