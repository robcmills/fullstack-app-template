import React, { Component } from 'react'
import { compose } from 'recompose'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import sweetConnect from 'redux/sweet-connect'
import { isLoggingInSelector, isLoggedInSelector } from 'redux/selectors'

class GoogleSignIn extends Component {
	handleGoogleLogin = () => {
		// todo
	}

	render() {
		return (
			<Button
				size="large"
				onClick={this.handleGoogleLogin}
			>
				<img src="/images/google.png" height="32" width="32" alt="Google Login" />
				&nbsp;&nbsp;
				{'Login with Google'}
			</Button>
		)
	}
}

const styles = {
	googleLogin: {
		// todo
	},
}

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isLoggingIn: isLoggingInSelector,
			isLoggedIn: isLoggedInSelector,
		},
	})
)(GoogleSignIn)