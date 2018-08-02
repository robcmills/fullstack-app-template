import createReducer from './create-reducer'
import initialState from './initial-state'
import handlers from './handlers'

export default createReducer(initialState, handlers)