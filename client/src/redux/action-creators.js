import store from './store'
import requestAction from './request-action'
import socket from '../socket'

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

export const fetchChannel = ({ channelId }) =>
	requestAction({
		method: 'GET',
		payload: { channelId },
		type: 'FETCH_CHANNEL',
		url: `/api/channels/${channelId}`,
	})

export const fetchChannels = () =>
	requestAction({
		method: 'GET',
		type: 'FETCH_CHANNELS',
		url: '/api/channels',
	})

export const fetchChannelMessages = ({ channelId }) =>
	requestAction({
		method: 'GET',
		payload: { channelId },
		type: 'FETCH_CHANNEL_MESSAGES',
		url: `/api/channels/${channelId}/messages`,
	})

export const fetchDirectMessages = ({ userId }) =>
	requestAction({
		method: 'GET',
		payload: { userId },
		type: 'FETCH_DIRECT_MESSAGES',
		url: `/api/users/${userId}/messages`,
	})

export const fetchUser = ({ userId }) =>
	requestAction({
		method: 'GET',
		type: 'FETCH_USER',
		url: `/api/users/${userId}`,
	})

export const fetchUsers = () =>
	requestAction({
		method: 'GET',
		type: 'FETCH_USERS',
		url: '/api/users',
	})

export const googleLogin = () =>
	requestAction({
		method: 'GET',
		type: 'GOOGLE_LOGIN',
		url: 'http://localhost:3001/api/google-login',
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

export const sendMessage = payload => {
	const type = 'SEND_MESSAGE'
	socket.emit(type, payload)
	return requestAction({
		body: payload,
		method: 'POST',
		payload,
		type,
		url: `/api/channels/${payload.channelId}/messages`,
	})
}

export const sendDirectMessage = payload => {
	const type = 'SEND_DIRECT_MESSAGE'
	socket.emit(type, payload)
	return requestAction({
		body: payload,
		method: 'POST',
		payload,
		type,
		url: `/api/users/${payload.recipientUserId}/message`,
	})
}

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
