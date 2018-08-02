import store from './store'
import asyncAction from './async-action'

export const register = payload => {
	asyncAction({
		body: payload,
		method: 'POST',
		type: 'REGISTER',
		url: '/api/register',
	})
}

export const closeRegisterSnackbar = () => {
	store.dispatch({ type: 'CLOSE_REGISTER_SNACKBAR' })
}
