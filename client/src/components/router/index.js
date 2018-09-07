import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private-route'
import Login from '../login'
import Register from '../register'
import Chat from '../chat'

const Router = () =>
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={() => <Redirect to="/chat" />} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/chat" component={Chat} />
			<PrivateRoute path="/channels" component={Chat} exact />
			<PrivateRoute path="/channels/:channel_id" component={Chat} />
		</Switch>
	</BrowserRouter>

export default Router