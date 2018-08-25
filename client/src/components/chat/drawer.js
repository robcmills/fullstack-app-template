import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ChannelsList from './channels-list'
import UsersList from './users-list'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const ChatDrawer = ({ activeChannel, classes }) =>
	<Drawer variant="permanent" classes={{ paper: classes.drawer }}>
		<div className={classes.toolbar} />
		<div className={classes.scrollContainer}>
			<ChannelsList activeChannel={activeChannel} />
			<Divider />
			<UsersList />
		</div>
	</Drawer>

const styles = theme => ({
	drawer: {
		position: 'relative',
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
	scrollContainer: {
		overflowY: 'scroll',
	}
})

export default withStyles(styles)(ChatDrawer)
