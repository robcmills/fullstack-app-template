import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const CreateChannelModal = ({ handleClose, isOpen }) =>
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
				margin="dense"
				id="name"
				label="Name"
				type="text"
				fullWidth
			/>
		</DialogContent>
		<DialogActions>
			<Button onClick={handleClose} color="primary">
				Cancel
			</Button>
			<Button color="primary">
				Create
			</Button>
		</DialogActions>
	</Dialog>

export default CreateChannelModal
