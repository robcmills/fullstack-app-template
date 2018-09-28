import React from 'react'
import { compose } from 'recompose'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'

import Navigation from './navigation'
import sweetConnect from 'redux/sweet-connect'
import { isDrawerOpenSelector } from 'redux/selectors'
import { toggleDrawer } from 'redux/action-creators'

const drawerWidth = 240

const ChatDrawer = ({ activeChannel, classes, isDrawerOpen }) =>
	<div className={classes.container}>
		<Hidden smDown>
			<Drawer variant="permanent" classes={{ paper: classes.drawer }}>
				<div className={classes.scrollContainer}>
					<Navigation />
				</div>
			</Drawer>
		</Hidden>
		<Hidden mdUp>
			<Drawer
				classes={{ paper: classes.drawer }}
				open={isDrawerOpen}
				onClose={toggleDrawer}
				BackdropProps={{
					invisible: true,
				}}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				<Navigation />
			</Drawer>
		</Hidden>
	</div>

const styles = theme => ({
	container: {
		display: 'flex',
		flex: '0 0 auto',
		height: '100%',
	},
	drawer: {
		position: 'relative',
		width: drawerWidth,
	},
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