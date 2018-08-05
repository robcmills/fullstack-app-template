import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import UsersList from './users-list'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const styles = theme => ({
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
})

const ChatDrawer = ({ classes }) =>
	<Drawer
		variant="permanent"
		classes={{
			paper: classes.drawerPaper,
		}}
	>
		<div className={classes.toolbar} />
		<UsersList />
		<Divider />
		<List>list</List>
	</Drawer>

export default withStyles(styles)(ChatDrawer)
