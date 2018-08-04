import store from './store'
import requestAction from './request-action'

export const authenticate = () => {
	requestAction({
		method: 'POST',
		type: 'AUTHENTICATE',
		url: '/api/authenticate',
	})
}

export const login = payload => {
	requestAction({
		body: payload,
		method: 'POST',
		type: 'LOGIN',
		url: '/api/login',
	})
}
export const register = payload => {
	requestAction({
		body: payload,
		method: 'POST',
		type: 'REGISTER',
		url: '/api/register',
	})
}

export const closeRegisterSnackbar = () => {
	store.dispatch({ type: 'CLOSE_REGISTER_SNACKBAR' })
}
