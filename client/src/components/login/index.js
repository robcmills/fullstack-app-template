import React, { Component } from 'react'
import { compose } from 'recompose'
import { Link, Redirect } from 'react-router-dom'

import LoginSnackbar from './snackbar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { login } from 'redux/action-creators'
import sweetConnect from 'redux/sweet-connect'
import { isLoggingInSelector, isLoggedInSelector } from 'redux/selectors'

class Login extends Component {
	state = {
		username: '',
		password: '',
		errors: {},
	}

	validate = () => {
		this.setState({
			errors: {
				username: this.state.username ? null : 'Required',
				password: this.state.password ? null : 'Required',
			},
		})
		const isValid = this.state.username && this.state.password
		return isValid
	}

	handleKeyPress = event => {
		if (event.key === 'Enter') {
			this.handleSubmit()
		}
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		})
	}

	handleSubmit = () => {
		const isValid = this.validate()
		if (!isValid) {
			return
		}
		login(this.state)
	}

	handleGoogleSignIn = (googleUser) => {
		const profile = googleUser.getBasicProfile()
		console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName())
		console.log('Image URL: ' + profile.getImageUrl())
		console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
	}

	render() {
		const { classes, isLoggingIn, isLoggedIn } = this.props
		if (isLoggedIn) {
			return <Redirect to="/chat" />
		}
		return (
			<div className={classes.login}>
				<LoginSnackbar />
				<Card className={classes.card}>
					<form>
						<CardContent>
							<TextField
								disabled={isLoggingIn}
								error={!!this.state.errors.username}
								fullWidth
								helperText={this.state.errors.username}
								id="username"
								margin="normal"
								onChange={this.handleChange('username')}
								onKeyPress={this.handleKeyPress}
								placeholder="username"
								value={this.state.username}
							/>
							<TextField
								disabled={isLoggingIn}
								error={!!this.state.errors.password}
								fullWidth
								helperText={this.state.errors.password}
								id="password"
								inputProps={{ type: 'password' }}
								margin="normal"
								onChange={this.handleChange('password')}
								onKeyPress={this.handleKeyPress}
								placeholder="password"
								value={this.state.password}
							/>
						</CardContent>
						<CardContent className={classes.actions}>
							<Button
								color="primary"
								disabled={isLoggingIn}
								size="large"
								variant="contained"
								onClick={this.handleSubmit}
							>
								{isLoggingIn ? 'Logging in...' : 'Login'}
							</Button>
						</CardContent>
						<CardContent className={classes.actions}>
							<div className="g-signin2" data-onsuccess={this.onGoogleSignIn} />
						</CardContent>
						<CardContent className={classes.actions}>
							<Button component={Link} to="/register">Register</Button>
						</CardContent>
					</form>
				</Card>
			</div>
		)
	}
}

const styles = {
	login: {
		'align-items': 'center',
		'justify-content': 'center',
		bottom: 0,
		display: 'flex',
		left: 0,
		padding: '2em',
		position: 'absolute',
		right: 0,
		top: 0,
	},
	card: {
		width: 420,
	},
	actions: {
		'justify-content': 'center',
		display: 'flex',
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
)(Login)