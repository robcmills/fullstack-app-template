import React from 'react'

import MenuBar from './menu-bar'
import Drawer from './drawer'
import View from './view'

import { withStyles } from '@material-ui/core/styles'

const Chat = ({ classes }) =>
	<div className={classes.chat}>
		<MenuBar />
		<div className={classes.view}>
			<Drawer />
			<View />
		</div>
	</div>

const styles = {
	chat: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		height: '100%',
		overflow: 'hidden',
	},
	view: {
		display: 'flex',
		flex: '1 1 auto',
		height: '100%',
	}
}

export default withStyles(styles)(Chat)
