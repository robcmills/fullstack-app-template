import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const initialState = {
	errors: { email: false },
	email: '',
}

class AddUserModal extends Component {
	state = initialState

	resetState = () => {
		this.setState(initialState)
	}

	handleExited = () => {
		this.resetState()
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
		alert('not yet implemented')
	}

	render() {
		const { handleClose, isOpen } = this.props
		return (
			<Dialog
				aria-labelledby="form-dialog-title"
				fullWidth
				onClose={handleClose}
				onExited={this.handleExited}
				open={isOpen}
			>
				<DialogTitle id="form-dialog-title">Invite a friend</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						error={!!this.state.errors.email}
						fullWidth
						helperText={this.state.errors.email}
						id="email"
						label="Email"
						margin="dense"
						onChange={this.handleChange('email')}
						onKeyPress={this.handleKeyPress}
						type="email"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						onClick={this.handleSubmit}
						color="primary"
					>
						{'Send Invite'}
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default AddUserModal
