import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ChannelsList from './channels-list'
import UsersList from './users-list'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const ChatDrawer = ({ activeChannel, classes }) =>
	<Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
		<div className={classes.toolbar} />
		<ChannelsList activeChannel={activeChannel} />
		<Divider />
		<UsersList />
	</Drawer>

const styles = theme => ({
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
})

export default withStyles(styles)(ChatDrawer)
