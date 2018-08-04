import React, { Component } from 'react'

import sweetConnect from '../../redux/sweet-connect'
import { authenticate } from '../../redux/action-creators'
import { isAuthenticatingSelector, isLoggedInSelector } from '../../redux/selectors'

class Auth extends Component {
	componentDidMount() {
		authenticate()
	}

	render() {
		if (this.props.isAuthenticating) {
			return <div>Authenticating...</div>
		}
		return this.props.isLoggedIn
			? <div>Logged in</div>
			: <div>Logged out</div>
	}
}

export default sweetConnect({
	selectors: {
		isAuthenticating: isAuthenticatingSelector,
		isLoggedIn: isLoggedInSelector,
	},
})(Auth)
