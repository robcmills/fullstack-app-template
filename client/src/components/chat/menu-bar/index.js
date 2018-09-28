import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'

import Title from './title'
import UserMenu from './user-menu'
import { toggleDrawer } from 'redux/action-creators'

const MenuBar = ({ classes }) =>
	<AppBar className={classes.appBar} position="relative">
		<Toolbar className={classes.toolBar}>
			<Hidden mdUp>
				<IconButton
					aria-label="Menu"
					className={classes.menuButton}
					color="inherit"
					onClick={toggleDrawer}
				>
					<MenuIcon />
				</IconButton>
			</Hidden>
			<Title />
			<UserMenu />
		</Toolbar>
	</AppBar>

const styles = theme => ({
	appBar: {
		boxShadow: 'none',
		[theme.breakpoints.up('md')]: {
			padding: `0 ${theme.spacing.unit * 2}px`,
		},
	},
	toolBar: {
		padding: 0,
	},
	menuButton: {
		margin: 4,
	},
})

export default withStyles(styles)(MenuBar)
