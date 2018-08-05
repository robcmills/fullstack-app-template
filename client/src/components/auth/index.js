import React, { Component } from 'react'

import { authenticate } from '../../redux/action-creators'

class Auth extends Component {
	componentDidMount() {
		authenticate()
	}

	render() {
		return <div />
	}
}

export default Auth
