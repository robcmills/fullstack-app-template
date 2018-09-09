import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private-route'
import Login from '../login'
import Register from '../register'
import ChatRouter from '../chat/router'

const Router = () =>
	<BrowserRouter>
		<Switch>
			<Route path="/" exact>
				<Redirect to="/chat" />
			</Route>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/chat" component={ChatRouter} />
			<Route>
				<Redirect to="/chat" />
			</Route>
		</Switch>
	</BrowserRouter>

export default Router