import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private-route'
import Auth from '../auth'
import Login from '../login'
import Register from '../register'
import Chat from '../chat'

const Router = () =>
	<BrowserRouter>
		<div>
			<Auth />
			<Switch>
				<Route path="/" exact component={() => <Redirect to="/chat" />} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute path="/chat" component={Chat} />
			</Switch>
		</div>
	</BrowserRouter>

export default Router