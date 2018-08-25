module.exports = {
	AUTHENTICATE_REQUEST: (state) => ({
		...state,
		isAuthenticating: true,
	}),
	AUTHENTICATE_SUCCESS: (state, user) => ({
		...state,
		isAuthenticating: false,
		user,
	}),
	AUTHENTICATE_FAILURE: (state) => ({
		...state,
		isAuthenticating: false,
		// todo error
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
	CREATE_CHANNEL_FAILURE: (state, error) => ({
		...state,
		createChannelError: error.message,
		isCreatingChannel: false,
	}),
	CREATE_CHANNEL_SUCCESS: (state, channel) => ({
		...state,
		channels: state.channels.concat(channel),
		createChannelError: false,
		isCreatingChannel: false,
	}),

	FETCH_CHANNELS_REQUEST: (state) => ({
		...state,
		isFetchingChannels: true,
	}),
	FETCH_CHANNELS_FAILURE: (state) => ({
		...state,
		isFetchingChannels: false,
	}),
	FETCH_CHANNELS_SUCCESS: (state, channels) => ({
		...state,
		channels,
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
	FETCH_MESSAGES_SUCCESS: (state, messages) => ({
		...state,
		isFetchingMessages: false,
		messagesByChannelId: {
			...state.messagesByChannelId,
			[messages[0].channelId]: messages,
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
	FETCH_USERS_SUCCESS: (state, users) => ({
		...state,
		isFetchingUsers: false,
		users,
	}),

	LOGIN_REQUEST: (state) => ({
		...state,
		isLoggingIn: true,
	}),
	LOGIN_SUCCESS: (state, user) => ({
		...state,
		isLoggingIn: false,
		user,
	}),
	LOGIN_FAILURE: (state, error) => ({
		...state,
		isLoggingIn: false,
		loginError: error.message,
	}),

	LOGOUT_REQUEST: (state) => ({
		...state,
		user: null,
	}),

	REGISTER_REQUEST: (state, payload) => ({
		...state,
		isRegistering: true,
	}),
	REGISTER_SUCCESS: (state, user) => ({
		...state,
		isRegistering: false,
		user,
	}),
	REGISTER_FAILURE: (state, payload) => ({
		...state,
		isRegistering: false,
		registerError: true,
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

	CLOSE_LOGIN_SNACKBAR: (state) => ({
		...state,
		loginError: false,
	}),
	CLOSE_REGISTER_SNACKBAR: (state) => ({
		...state,
		registerError: false,
	}),
}
