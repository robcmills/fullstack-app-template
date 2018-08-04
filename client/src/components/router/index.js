import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import PrivateRoute from './private-route'
import Auth from '../auth'
import Login from '../login'
import Register from '../register'
import Chat from '../chat'

const Router = () =>
	<BrowserRouter>
		<div>
			<Auth />
			<Route path="/" exact component={() => <Redirect to="/chat" />} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/chat" component={Chat} />
		</div>
	</BrowserRouter>

export default Router