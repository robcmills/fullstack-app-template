import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

class Login extends Component {
	state = {
		username: '',
		password: '',
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		})
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.login}>
				<Card className={classes.card}>
					<CardContent>
						<form className={classes.container} noValidate autoComplete="off">
							<TextField
								id="username"
								value={this.state.username}
								onChange={this.handleChange('username')}
								margin="normal"
								placeholder="username"
								fullWidth
							/>
							<TextField
								id="password"
								value={this.state.password}
								onChange={this.handleChange('password')}
								margin="normal"
								placeholder="password"
								fullWidth
								inputProps={{ type: 'password' }}
							/>
						</form>
					</CardContent>
					<CardContent className={classes.actions}>
						<Button
							color="primary"
							size="large"
							variant="contained"
						>
							Login
						</Button>
					</CardContent>
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
