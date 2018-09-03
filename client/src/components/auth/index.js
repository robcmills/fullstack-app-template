import React, { Component } from 'react'

import Router from '../router'
import sweetConnect from '../../redux/sweet-connect'
import { isLoggedInSelector, isLoggingInSelector } from '../../redux/selectors'
import { authenticate } from '../../redux/action-creators'

class Auth extends Component {
	componentDidMount() {
		if (!this.props.isLoggedIn) {
			authenticate()
		}
	}

	render() {
		const { isLoggedIn, isLoggingIn } = this.props
		return (isLoggingIn && !isLoggedIn) ? <div /> : <Router />
	}
}

export default sweetConnect({
	selectors: {
		isLoggedIn: isLoggedInSelector,
		isLoggingIn: isLoggingInSelector,
	},
})(Auth)
