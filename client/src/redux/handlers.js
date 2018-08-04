module.exports = {
	AUTHENTICATE_REQUEST: (state) => {
		return {
			...state,
			isAuthenticating: true,
		}
	},
	AUTHENTICATE_SUCCESS: (state, user) => {
		return {
			...state,
			isAuthenticating: false,
			user,
		}
	},
	AUTHENTICATE_FAILURE: (state) => {
		return {
			...state,
			isAuthenticating: false,
			// todo error
		}
	},
	LOGIN_REQUEST: (state) => {
		return {
			...state,
			isLoggingIn: true,
		}
	},
	LOGIN_SUCCESS: (state, user) => {
		return {
			...state,
			isLoggingIn: false,
			user,
		}
	},
	LOGIN_FAILURE: (state, error) => {
		return {
			...state,
			isLoggingIn: false,
			loginError: error,
		}
	},
	LOGOUT_REQUEST: (state) => {
		return {
			...state,
			user: null,
		}
	},
	REGISTER_REQUEST: (state, payload) => {
		return {
			...state,
			isRegistering: true,
		}
	},
	REGISTER_FAILURE: (state, payload) => {
		return {
			...state,
			isRegistering: false,
			registerError: true,
		}
	},
	CLOSE_REGISTER_SNACKBAR: (state) => ({
		...state,
		registerError: false,
	}),
}
