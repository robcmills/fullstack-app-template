import React, { Component } from 'react'
import { compose } from 'recompose'
import GoogleLogin from 'react-google-login'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import sweetConnect from 'redux/sweet-connect'
import { isLoggingInSelector, isLoggedInSelector } from 'redux/selectors'

const clientId = process.env.NODE_ENV === 'development'
	? process.env.REACT_APP_GOOGLE_SIGN_IN_CLIENT_ID
	: process.env.GOOGLE_SIGN_IN_CLIENT_ID

const LOGO_SIZE = 22

class GoogleSignIn extends Component {
	handleFailure = res => {
		console.log('SignIn failure', res)
	}

	handleSuccess = res => {
		console.log('SignIn success', res)
	}

	render() {
		return (
			<GoogleLogin
		    clientId={clientId}
		    onSuccess={this.handleSuccess}
		    onFailure={this.handleFailure}
		    render={({ onClick }) =>
					<Button
						onClick={onClick}
						size="large"
						variant="outlined"
					>
						<img
							alt="Google Logo"
							height={LOGO_SIZE}
							src="/images/google.png"
							width={LOGO_SIZE}
						/>
						&nbsp;&nbsp;
						{'Login with Google'}
					</Button>
				}
			/>
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