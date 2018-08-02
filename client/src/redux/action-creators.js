import store from './store'

export const actionName = payload => {
	// example
	store.dispatch({ type: 'ACTION_TYPE', payload })
}
