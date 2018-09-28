import React from 'react'

import MenuBar from './menu-bar'
import Drawer from './drawer'
import View from './view'

import { withStyles } from '@material-ui/core/styles'

const Chat = ({ classes }) =>
	<div className={classes.chat}>
		<MenuBar />
		<Drawer />
		<View />
	</div>

const styles = {
	chat: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		overflow: 'hidden',
	},
}

export default withStyles(styles)(Chat)
