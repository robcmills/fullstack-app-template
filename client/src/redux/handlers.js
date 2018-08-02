module.exports = {
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
