import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/AddCircleOutline'

import AddUserModal from './modal'

class AddUser extends Component {
	state = { isModalOpen: false }

	handleOpen = () => this.setState({ isModalOpen: true })
	handleClose = () => this.setState({ isModalOpen: false })

	render() {
		const { isModalOpen } = this.state
		return [
			<IconButton
				color="primary"
				key="add"
				onClick={this.handleOpen}
			>
				<AddIcon />
			</IconButton>,
			<AddUserModal
				handleClose={this.handleClose}
				isOpen={isModalOpen}
				key="modal"
			/>
		]
	}
}

export default AddUser
