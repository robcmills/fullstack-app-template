import React, { Component } from 'react'
import _ from 'lodash'
import { Link, Redirect } from 'react-router-dom'

import RegisterSnackbar from './snackbar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { withStyles } from '@material-ui/core/styles'
import sweetConnect from '../../redux/sweet-connect'
import { register } from '../../redux/action-creators'
import { isLoggedInSelector, isRegisteringSelector } from '../../redux/selectors'

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		errors: {},
	}

	validate = () => {
		this.setState({
			errors: {
				username: this.state.username ? null : 'Required',
				email: this.state.email ? null : 'Required',
				password: this.state.password ? null : 'Required',
			},
		})
		const isValid = this.state.username &&
			this.state.email &&
			this.state.password
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
		register(this.state)
	}

	render() {
		const { classes, isLoggedIn, isRegistering } = this.props;
		if (isLoggedIn) {
			return <Redirect to="/chat" />
		}
		return (
			<div className={classes.register}>
				<RegisterSnackbar />
				<Card className={classes.card}>
					<form>
						<CardContent>
							<TextField
								id="username"
								value={this.state.username}
								onChange={this.handleChange('username')}
								onKeyPress={this.handleKeyPress}
								margin="normal"
								placeholder="username"
								fullWidth
								error={!!this.state.errors.username}
								helperText={this.state.errors.username}
							/>
							<TextField
								id="email"
								value={this.state.email}
								onChange={this.handleChange('email')}
								onKeyPress={this.handleKeyPress}
								margin="normal"
								placeholder="email"
								fullWidth
								error={!!this.state.errors.email}
								helperText={this.state.errors.email}
								inputProps={{ type: 'email' }}
							/>
							<TextField
								id="password"
								value={this.state.password}
								onChange={this.handleChange('password')}
								onKeyPress={this.handleKeyPress}
								margin="normal"
								placeholder="password"
								fullWidth
								error={!!this.state.errors.password}
								helperText={this.state.errors.password}
								inputProps={{ type: 'password' }}
							/>
						</CardContent>
						<CardContent className={classes.actions}>
							<Button
								color="primary"
								disabled={isRegistering}
								onClick={this.handleSubmit}
								size="large"
								variant="contained"
							>
								{isRegistering ? 'Registering...' : 'Register'}
							</Button>
						</CardContent>
						<CardContent className={classes.actions}>
							<Button component={Link} to="/login">Login</Button>
						</CardContent>
					</form>
				</Card>
			</div>
		)
	}
}

const styles = {
	register: {
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

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isLoggedIn: isLoggedInSelector,
			isRegistering: isRegisteringSelector,
		},
	})
)(Register)
