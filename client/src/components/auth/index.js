import React, { Component } from 'react'

import sweetConnect from '../../redux/sweet-connect'
import { authenticate, logout } from '../../redux/action-creators'
import {
	isAuthenticatingSelector,
	isLoggedInSelector,
	userSelector
} from '../../redux/selectors'

class Auth extends Component {
	componentDidMount() {
		authenticate()
	}

	render() {
		const { isAuthenticating, isLoggedIn, user } = this.props
		if (isAuthenticating) {
			return <div>Authenticating...</div>
		}
		return isLoggedIn
			? <div>
				Logged in as <span style={{ fontWeight: 'bold' }}>{user.username}</span>
				<button onClick={logout}>Log out</button>
			</div>
			: <div>Logged out</div>
	}
}

export default sweetConnect({
	selectors: {
		isAuthenticating: isAuthenticatingSelector,
		isLoggedIn: isLoggedInSelector,
		user: userSelector,
	},
})(Auth)
