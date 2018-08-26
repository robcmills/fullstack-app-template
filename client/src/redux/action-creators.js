import store from './store'
import requestAction from './request-action'

export const authenticate = () =>
	requestAction({
		method: 'POST',
		type: 'AUTHENTICATE',
		url: '/api/authenticate',
	})

export const createChannel = payload =>
	requestAction({
		body: payload,
		method: 'POST',
		type: 'CREATE_CHANNEL',
		url: '/api/channels',
	})

export const fetchChannels = () =>
	requestAction({
		method: 'GET',
		type: 'FETCH_CHANNELS',
		url: '/api/channels',
	})

export const fetchMessages = ({ channelId }) =>
	requestAction({
		method: 'GET',
		type: 'FETCH_MESSAGES',
		url: `/api/channels/${channelId}/messages`,
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

export const sendMessage = message =>
	requestAction({
		body: message,
		method: 'POST',
		type: 'SEND_MESSAGE',
		url: `/api/channels/${message.channelId}/messages`,
	})

export const toggleDrawer = () => {
	store.dispatch({ type: 'TOGGLE_DRAWER' })
}

export const clearCreateChannelError = () => {
	store.dispatch({ type: 'CLEAR_CREATE_CHANNEL_ERROR' })
}

export const closeLoginSnackbar = () => {
	store.dispatch({ type: 'CLOSE_LOGIN_SNACKBAR' })
}

export const closeRegisterSnackbar = () => {
	store.dispatch({ type: 'CLOSE_REGISTER_SNACKBAR' })
}
