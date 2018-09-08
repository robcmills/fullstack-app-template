import { indexBy, prop } from 'ramda'

export default {
	AUTHENTICATE_REQUEST: (state) => ({
		...state,
		isLoggingIn: true,
	}),
	AUTHENTICATE_FAILURE: (state) => ({
		...state,
		isLoggingIn: false,
		// todo error
	}),
	AUTHENTICATE_SUCCESS: (state, { response: user }) => ({
		...state,
		isLoggingIn: false,
		user,
	}),

	CLEAR_CREATE_CHANNEL_ERROR: (state) => ({
		...state,
		createChannelError: false,
	}),

	CREATE_CHANNEL_REQUEST: (state) => ({
		...state,
		createChannelError: false,
		isCreatingChannel: true,
	}),
	CREATE_CHANNEL_FAILURE: (state, { error }) => ({
		...state,
		createChannelError: error.message,
		isCreatingChannel: false,
	}),
	CREATE_CHANNEL_SUCCESS: (state, { response: channel }) => ({
		...state,
		channelsById: {
			...state.channelsById,
			[channel.id]: channel,
		},
		createChannelError: false,
		isCreatingChannel: false,
	}),

	FETCH_CHANNEL_REQUEST: (state) => ({
		...state,
		isFetchingChannel: true,
	}),
	FETCH_CHANNEL_FAILURE: (state) => ({
		...state,
		isFetchingChannel: false,
	}),
	FETCH_CHANNEL_SUCCESS: (state, { channelId, response: channel }) => ({
		...state,
		channelsById: {
			...state.channelsById,
			[channelId]: channel,
		},
		isFetchingChannel: false,
	}),

	FETCH_CHANNELS_REQUEST: (state) => ({
		...state,
		isFetchingChannels: true,
	}),
	FETCH_CHANNELS_FAILURE: (state) => ({
		...state,
		isFetchingChannels: false,
	}),
	FETCH_CHANNELS_SUCCESS: (state, { response: channels }) => ({
		...state,
		channelsById: {
			...state.channelsById,
			...indexBy(prop('id'), channels)
		},
		isFetchingChannels: false,
	}),

	FETCH_MESSAGES_REQUEST: (state) => ({
		...state,
		isFetchingMessages: true,
	}),
	FETCH_MESSAGES_FAILURE: (state) => ({
		...state,
		isFetchingMessages: false,
	}),
	FETCH_MESSAGES_SUCCESS: (state, { channelId, response: messages }) => ({
		...state,
		isFetchingMessages: false,
		messagesByChannelId: {
			...state.messagesByChannelId,
			[channelId]: messages,
		},
	}),

	FETCH_USERS_REQUEST: (state) => ({
		...state,
		isFetchingUsers: true,
	}),
	FETCH_USERS_FAILURE: (state) => ({
		...state,
		isFetchingUsers: false,
	}),
	FETCH_USERS_SUCCESS: (state, { response: users }) => ({
		...state,
		isFetchingUsers: false,
		usersById: {
			...state.usersById,
			...indexBy(prop('id'), users)
		},
	}),

	LOGIN_REQUEST: (state) => ({
		...state,
		isLoggingIn: true,
	}),
	LOGIN_FAILURE: (state, error) => ({
		...state,
		isLoggingIn: false,
		loginError: error.message,
	}),
	LOGIN_SUCCESS: (state, { response: user }) => ({
		...state,
		isLoggingIn: false,
		user,
	}),

	LOGOUT_REQUEST: (state) => ({
		...state,
		user: null,
	}),

	REGISTER_REQUEST: (state) => ({
		...state,
		isRegistering: true,
	}),
	REGISTER_FAILURE: (state) => ({
		...state,
		isRegistering: false,
		registerError: true,
	}),
	REGISTER_SUCCESS: (state, { response: user }) => ({
		...state,
		isRegistering: false,
		user,
	}),

	SEND_MESSAGE_REQUEST: (state, message) => ({
		...state,
		messagesByChannelId: {
			...state.messagesByChannelId,
			[message.channelId]: [
				message,
				...(state.messagesByChannelId[message.channelId] || []),
			],
		},
	}),

	TOGGLE_DRAWER: (state) => ({
		...state,
		isDrawerOpen: !state.isDrawerOpen,
	}),

	CLOSE_LOGIN_SNACKBAR: (state) => ({
		...state,
		loginError: false,
	}),
	CLOSE_REGISTER_SNACKBAR: (state) => ({
		...state,
		registerError: false,
	}),
}
