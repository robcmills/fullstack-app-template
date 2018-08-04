// const { createSelector } = require('reselect')

const isRegisteringSelector = state => state.isRegistering
const registerErrorSelector = state => state.registerError

const isLoggedInSelector = state => !!state.user

// const createSelectorExample = createSelector(
// 	mySelector,
// 	(foo) => foo + 'bar'
// )

module.exports = {
	isRegisteringSelector,
	isLoggedInSelector,
	registerErrorSelector,
}