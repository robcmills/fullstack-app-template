import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { createChannel } from '../../redux/action-creators'
import sweetConnect from '../../redux/sweet-connect'
import {
	isCreatingChannelSelector,
	createChannelErrorSelector
} from '../../redux/selectors'

class CreateChannelModal extends Component {
	state = {
		name: '',
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
		createChannel(this.state).then((result) => {
			if (result.id) {
				this.props.handleClose()
			}
		})
	}

	render() {
		const {
			createChannelError,
			handleClose,
			isCreatingChannel,
			isOpen
		} = this.props
		return (
			<Dialog
				aria-labelledby="form-dialog-title"
				fullWidth
				onClose={handleClose}
				open={isOpen}
			>
				<DialogTitle id="form-dialog-title">Create a Channel</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						disabled={isCreatingChannel}
						error={!!createChannelError}
						fullWidth
						helperText={createChannelError}
						id="name"
						label="Name"
						margin="dense"
						onChange={this.handleChange('name')}
						onKeyPress={this.handleKeyPress}
						type="text"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						disabled={isCreatingChannel}
						onClick={this.handleSubmit}
						color="primary"
					>
						{isCreatingChannel ? 'Creating...' : 'Create'}
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default sweetConnect({
	selectors: {
		isCreatingChannel: isCreatingChannelSelector,
		createChannelError: createChannelErrorSelector
	}
})(CreateChannelModal)
