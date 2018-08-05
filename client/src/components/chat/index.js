import React, { Component } from 'react'
import MenuBar from './menu-bar'
import Drawer from './drawer'
import { fetchUsers } from '../../redux/action-creators'
import { withStyles } from '@material-ui/core/styles'

class Chat extends Component {
	componentDidMount() {
		fetchUsers()
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.chat}>
				<MenuBar />
				<Drawer />
				<h1>Chat</h1>
			</div>
		)
	}
}

const styles = {
	chat: {
		display: 'flex',
		flexGrow: 1,
		height: 430,
		overflow: 'hidden',
		position: 'relative',
		zIndex: 1,
	},
}

export default withStyles(styles)(Chat)