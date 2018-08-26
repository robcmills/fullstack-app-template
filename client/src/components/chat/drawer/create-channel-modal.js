import React, { Component } from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import {
	clearCreateChannelError,
	createChannel,
} from '../../../redux/action-creators'
import sweetConnect from '../../../redux/sweet-connect'
import {
	isCreatingChannelSelector,
	createChannelErrorSelector
} from '../../../redux/selectors'

const initialState = {
	errors: { name: false },
	name: '',
}

class CreateChannelModal extends Component {
	state = initialState

	resetState = () => {
		this.setState(initialState)
	}

	validate = () => {
		this.setState({
			errors: {
				name: this.state.name ? false : 'Required',
			},
		})
		const isValid = Boolean(this.state.name)
		return isValid
	}

	handleExited = () => {
		clearCreateChannelError()
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
		const isValid = this.validate()
		if (!isValid) {
			return
		}
		createChannel(this.state).then((newChannel) => {
			if (newChannel.id) {
				this.props.handleClose()
				this.props.history.push(`/channels/${newChannel.id}`)
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
				onExited={this.handleExited}
				open={isOpen}
			>
				<DialogTitle id="form-dialog-title">Create a Channel</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						disabled={isCreatingChannel}
						error={!!this.state.errors.name || !!createChannelError}
						fullWidth
						helperText={this.state.errors.name || createChannelError}
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

export default _.flowRight(
	withRouter,
	sweetConnect({
		selectors: {
			isCreatingChannel: isCreatingChannelSelector,
			createChannelError: createChannelErrorSelector
		}
	}),
)(CreateChannelModal)
