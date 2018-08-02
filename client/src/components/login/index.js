import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

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
		// login action
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.login}>
				<Card className={classes.card}>
					<form>
						<CardContent>
							<TextField
								id="username"
								value={this.state.username}
								onChange={this.handleChange('username')}
								margin="normal"
								placeholder="username"
								fullWidth
								error={!!this.state.errors.username}
								helperText={this.state.errors.username}
							/>
							<TextField
								id="password"
								value={this.state.password}
								onChange={this.handleChange('password')}
								margin="normal"
								placeholder="password"
								fullWidth
								error={!!this.state.errors.password}
								helperText={this.state.errors.password}
								inputProps={{
									type: 'password',
								}}
							/>
						</CardContent>
						<CardContent className={classes.actions}>
							<Button
								color="primary"
								size="large"
								variant="contained"
								onClick={this.handleSubmit}
							>
								Login
							</Button>
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

export default withStyles(styles)(Login)
