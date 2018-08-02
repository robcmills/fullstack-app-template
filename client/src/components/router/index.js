import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom'

import PrivateRoute from './private-route'
import Login from '../login'
import Register from '../register'
import Chat from '../chat'

const Router = () =>
	<BrowserRouter>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/chat" component={Chat} />
		</Switch>
	</BrowserRouter>

export default Router