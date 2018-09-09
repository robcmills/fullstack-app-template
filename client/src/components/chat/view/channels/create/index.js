import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/AddCircleOutline'

import CreateModal from './create-modal'

class Create extends Component {
	state = { isModalOpen: false }

	handleOpen = () => this.setState({ isModalOpen: true })
	handleClose = () => this.setState({ isModalOpen: false })

	render() {
		const { isModalOpen } = this.state
		return [
			<IconButton
				color="primary"
				key="button"
				onClick={this.handleOpen}
			>
				<AddIcon />
			</IconButton>,
			<CreateModal
				handleClose={this.handleClose}
				isOpen={isModalOpen}
				key="modal"
			/>
		]
	}
}

export default Create
