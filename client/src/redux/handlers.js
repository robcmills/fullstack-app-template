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
	CLOSE_LOGIN_SNACKBAR: (state) => ({
		...state,
		loginError: false,
	}),
	CLOSE_REGISTER_SNACKBAR: (state) => ({
		...state,
		registerError: false,
	}),
}
