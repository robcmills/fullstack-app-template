export default function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action = {}) {
		const handler = handlers[action.type]
		return handler ? handler(state, action.payload, action) : state
	}
}
