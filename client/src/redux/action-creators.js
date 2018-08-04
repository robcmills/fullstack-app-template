import store from './store'
import requestAction from './request-action'

export const register = payload => {
	requestAction({
		body: payload,
		method: 'POST',
		type: 'REGISTER',
		url: '/api/users',
	})
}

export const closeRegisterSnackbar = () => {
	store.dispatch({ type: 'CLOSE_REGISTER_SNACKBAR' })
}
