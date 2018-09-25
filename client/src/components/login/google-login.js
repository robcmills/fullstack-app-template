import React, { Component } from 'react'
// import ReactGoogleLogin from 'react-google-login'
import Button from '@material-ui/core/Button'

// import { googleLogin } from 'redux/action-creators'

// const clientId = process.env.NODE_ENV === 'development'
// 	? process.env.REACT_APP_GOOGLE_CLIENT_ID
// 	: process.env.GOOGLE_CLIENT_ID

// import { PORT } from ''
// const googleLoginUrl = process.env.NODE_ENV === 'development'
//  	? 'http://localhost:${PORT}/api/google-login'

const LOGO_SIZE = 22

class GoogleLogin extends Component {
	state = {
		isLoggingIn: false,
	}

	handleClick = () => {
		this.setState({ isLoggingIn: true })
		window.location = 'http://localhost:3001/api/google-login'
		 // googleLogin()
	}

	handleFailure = res => {
		this.setState({ isLoggingIn: false })
		// TODO: throw error after implementing React app error boundary
		console.error('SignIn failure', res)
	}

	handleSuccess = res => {
		console.log('SignIn success', res)
		// const { tokenId } = res
	}

	render() {
		return (
			<Button
				disabled={this.state.isLoggingIn}
				onClick={this.handleClick}
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
		)
	}
}

export default GoogleLogin