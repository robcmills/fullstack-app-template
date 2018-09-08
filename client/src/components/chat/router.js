import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Chat from '.'

const ChatRouter = () =>
	<Switch>
		<Route path="/chat" exact>
			<Redirect to="/chat/channels" />
		</Route>
		<Route path="/chat" component={Chat} />
	</Switch>

export default ChatRouter