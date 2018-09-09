import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import CreateModal from './create-modal'

class Create extends Component {
	state = { isModalOpen: false }

	handleOpen = () => this.setState({ isModalOpen: true })
	handleClose = () => this.setState({ isModalOpen: false })

	render() {
		const { classes } = this.props
		const { isModalOpen } = this.state
		return [
			<Button
				className={classes.createButton}
				color="primary"
				key="button"
				onClick={this.handleOpen}
				size="small"
				variant="outlined"
			>
				Create
			</Button>,
			<CreateModal
				handleClose={this.handleClose}
				isOpen={isModalOpen}
				key="modal"
			/>
		]
	}
}

const styles = theme => ({
	createButton: {
		backgroundColor: '#edeff8',
		border: `1px solid ${theme.palette.primary.light}`,
		minHeight: '29px', // matches height of message-input
		padding: 0,
	},
})

export default withStyles(styles)(Create)
