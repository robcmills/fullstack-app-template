// const { createSelector } = require('reselect')

const isRegisteringSelector = state => state.isRegistering
const registerErrorSelector = state => state.registerError

const isAuthenticatingSelector = state => state.isAuthenticating
const isLoggedInSelector = state => !!state.user
const isLoggingInSelector = state => state.isLoggingIn

const userSelector = state => state.user

// const createSelectorExample = createSelector(
// 	mySelector,
// 	(foo) => foo + 'bar'
// )

module.exports = {
	isRegisteringSelector,
	isAuthenticatingSelector,
	isLoggedInSelector,
	isLoggingInSelector,
	registerErrorSelector,
	userSelector
}