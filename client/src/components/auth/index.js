import React, { Component } from 'react'
import _ from 'lodash'

import sweetConnect from '../../redux/sweet-connect'
import { authenticate, logout } from '../../redux/action-creators'
import {
	isAuthenticatingSelector,
	isLoggedInSelector,
	userSelector
} from '../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class Auth extends Component {
	componentDidMount() {
		authenticate()
	}

	render() {
		const { isAuthenticating, classes, isLoggedIn, user } = this.props
		if (isAuthenticating) {
			return <div className={classes.auth}>Authenticating...</div>
		}
		return isLoggedIn
			? <div className={classes.auth}>
				Logged in as <span style={{ fontWeight: 'bold' }}>{user.username}</span>
				<button onClick={logout}>Log out</button>
			</div>
			: <div className={classes.auth}>Logged out</div>
	}
}

const styles = {
	auth: {
		'position': 'absolute',
		'z-index': '1',
	},
}

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isAuthenticating: isAuthenticatingSelector,
			isLoggedIn: isLoggedInSelector,
			user: userSelector,
		},
	})
)(Auth)
