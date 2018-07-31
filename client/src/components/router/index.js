import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom'

import PrivateRoute from './private-route'
import Login from '../login'
import Chat from '../chat'

const Router = () =>
	<BrowserRouter>
		<Switch>
			<Route path="/login" component={Login} />
			<PrivateRoute path="/chat" component={Chat} />
		</Switch>
	</BrowserRouter>

export default Router