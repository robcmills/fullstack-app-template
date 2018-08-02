import store from './store'

export const register = payload => {
	store.dispatch({ type: 'REGISTER', payload })
}
