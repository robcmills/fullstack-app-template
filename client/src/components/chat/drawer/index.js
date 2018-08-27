import React from 'react'
import { compose } from 'recompose'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'

import ChannelsList from './channels-list'
import UsersList from './users-list'
import sweetConnect from '../../../redux/sweet-connect'
import { isDrawerOpenSelector } from '../../../redux/selectors'
import { toggleDrawer } from '../../../redux/action-creators'

const drawerWidth = 240

const ChatDrawer = ({ activeChannel, classes, isDrawerOpen }) =>
	<div>
		<Hidden smDown>
			<Drawer variant="permanent" classes={{ paper: classes.drawer }}>
				<div className={classes.toolbar} />
				<div className={classes.scrollContainer}>
					<ChannelsList activeChannel={activeChannel} />
					<Divider />
					<UsersList />
				</div>
			</Drawer>
		</Hidden>
		<Hidden mdUp>
			<Drawer
				classes={{ paper: classes.drawer }}
				open={isDrawerOpen}
				onClose={toggleDrawer}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				<ChannelsList activeChannel={activeChannel} />
				<Divider />
				<UsersList />
			</Drawer>
		</Hidden>
	</div>

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

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isDrawerOpen: isDrawerOpenSelector,
		}
	}),
)(ChatDrawer)