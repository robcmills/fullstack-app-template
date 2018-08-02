// const { createSelector } = require('reselect')

const isRegisteringSelector = state => state.isRegistering

// const createSelectorExample = createSelector(
// 	mySelector,
// 	(foo) => foo + 'bar'
// )

module.exports = {
	isRegisteringSelector,
}