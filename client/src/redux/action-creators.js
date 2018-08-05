import store from './store'
import requestAction from './request-action'

export const authenticate = () =>
	requestAction({
		method: 'POST',
		type: 'AUTHENTICATE',
		url: '/api/authenticate',
	})

export const fetchChannels = () =>
	requestAction({
		method: 'GET',
		type: 'FETCH_CHANNELS',
		url: '/api/channels',
	})

export const fetchUsers = () =>
	requestAction({
		method: 'GET',
		type: 'FETCH_USERS',
		url: '/api/users',
	})

export const login = payload =>
	requestAction({
		body: payload,
		method: 'POST',
		type: 'LOGIN',
		url: '/api/login',
	})

export const logout = () =>
	requestAction({
		method: 'DELETE',
		type: 'LOGOUT',
		url: '/api/logout',
	})

export const register = payload =>
	requestAction({
		body: payload,
		method: 'POST',
		type: 'REGISTER',
		url: '/api/register',
	})

export const closeLoginSnackbar = () => {
	store.dispatch({ type: 'CLOSE_LOGIN_SNACKBAR' })
}

export const closeRegisterSnackbar = () => {
	store.dispatch({ type: 'CLOSE_REGISTER_SNACKBAR' })
}
