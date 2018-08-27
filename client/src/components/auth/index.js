import React, { Component } from 'react'

import sweetConnect from '../../redux/sweet-connect'
import { isLoggedInSelector } from '../../redux/selectors'
import { authenticate } from '../../redux/action-creators'

class Auth extends Component {
	componentDidMount() {
		if (!this.props.isLoggedIn) {
			authenticate()
		}
	}

	render() {
		return <div />
	}
}

export default sweetConnect({
	selectors: {
		isLoggedIn: isLoggedInSelector,
	},
})(Auth)
