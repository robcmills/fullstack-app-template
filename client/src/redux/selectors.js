// const { createSelector } = require('reselect')

const channelsSelector = state => state.channels
const isAuthenticatingSelector = state => state.isAuthenticating
const isLoggedInSelector = state => !!state.user
const isLoggingInSelector = state => state.isLoggingIn
const isRegisteringSelector = state => state.isRegistering
const loginErrorSelector = state => state.loginError
const registerErrorSelector = state => state.registerError
const userSelector = state => state.user
const usersSelector = state => state.users

// const createSelectorExample = createSelector(
// 	mySelector,
// 	(foo) => foo + 'bar'
// )

module.exports = {
	channelsSelector,
	isAuthenticatingSelector,
	isLoggedInSelector,
	isLoggingInSelector,
	isRegisteringSelector,
	loginErrorSelector,
	registerErrorSelector,
	userSelector,
	usersSelector,
}