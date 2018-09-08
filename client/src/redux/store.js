import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from './history'
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
	connectRouter(history)(reducer),
	composeEnhancer(
		applyMiddleware(
			routerMiddleware(history)
		),
	),
)
