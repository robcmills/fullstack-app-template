import React, { Component } from 'react'
import ReactGoogleLogin from 'react-google-login'
import Button from '@material-ui/core/Button'

const clientId = process.env.NODE_ENV === 'development'
	? process.env.REACT_APP_GOOGLE_SIGN_IN_CLIENT_ID
	: process.env.GOOGLE_SIGN_IN_CLIENT_ID

const LOGO_SIZE = 22

class GoogleLogin extends Component {
	state = {
		isLoggingIn: false,
	}

	getClickHandler = reactGoogleLoginClickHandler => () => {
		this.setState({ isLoggingIn: true })
		reactGoogleLoginClickHandler()
	}

	handleFailure = res => {
		console.log('SignIn failure', res)
		this.setState({ isLoggingIn: false })
	}

	handleSuccess = res => {
		console.log('SignIn success', res)
	}

	render() {
		return (
			<ReactGoogleLogin
				clientId={clientId}
				onSuccess={this.handleSuccess}
				onFailure={this.handleFailure}
				render={({ onClick }) =>
					<Button
						disabled={this.state.isLoggingIn}
						onClick={this.getClickHandler(onClick)}
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
						{this.state.isLoggingIn ? 'Logging in...' : 'Login with Google'}
					</Button>
				}
			/>
		)
	}
}

export default GoogleLogin