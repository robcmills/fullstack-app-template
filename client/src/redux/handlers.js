module.exports = {
	REGISTER_REQUEST: (state, payload) => {
		return {
			...state,
			isRegistering: true,
		}
	},
}
