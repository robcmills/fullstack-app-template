// const { createSelector } = require('reselect')

const isRegisteringSelector = state => state.isRegistering
const registerErrorSelector = state => state.registerError

// const createSelectorExample = createSelector(
// 	mySelector,
// 	(foo) => foo + 'bar'
// )

module.exports = {
	isRegisteringSelector,
	registerErrorSelector,
}