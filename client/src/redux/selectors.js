const { createSelector } = require('reselect')

const mySelector = state => state.selectee

const createSelectorExample = createSelector(
	mySelector,
	(foo) => foo + 'bar'
)

module.exports = {
	createSelectorExample,
}