import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MenuBar from './menu-bar'
import Drawer from './drawer'
import Messages from './messages'
import { fetchChannels, fetchUsers } from '../../redux/action-creators'
import { withStyles } from '@material-ui/core/styles'

class Chat extends Component {
	componentDidMount() {
		fetchChannels()
		fetchUsers()
	}

	render() {
		const { classes, match } = this.props
		return (
			<div className={classes.chat}>
				<MenuBar />
				<Drawer />
				<Route
					path={`${match.url}/channels/:channel_id`}
					component={Messages}
				/>
			</div>
		)
	}
}

const styles = {
	chat: {
		display: 'flex',
		flexGrow: 1,
		overflow: 'hidden',
		position: 'relative',
		zIndex: 1,
	},
}

export default withStyles(styles)(Chat)