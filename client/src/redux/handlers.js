module.exports = {
	REGISTER: (state, payload) => {
		return {
			...state,
			isRegistering: true,
		}
	},
}
