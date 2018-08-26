import React, { Component } from 'react'
import _ from 'lodash'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from '../../redux/sweet-connect'
import { userSelector } from '../../redux/selectors'
import { logout, toggleDrawer } from '../../redux/action-creators'

class MenuBar extends Component {
	state = {
		anchorEl: null,
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { activeChannel, classes, user: { username } } = this.props
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)

		return (
			<AppBar className={classes.appBar} position="absolute">
				<Toolbar>
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
					<Typography variant="title" color="inherit" className={classes.flex}>
						{activeChannel ? activeChannel.name : 'Chat'}
					</Typography>
					<div>
						<Button
							aria-owns={open ? 'menu-appbar' : null}
							aria-haspopup="true"
							color="inherit"
							onClick={this.handleMenu}
							style={{ textTransform: 'none' }}
						>
							<AccountCircle />
							&nbsp;
							{username}
						</Button>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={this.handleClose}
						>
							<MenuItem onClick={this.handleClose}>Profile</MenuItem>
							<MenuItem onClick={logout}>Logout</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		)
	}
}

const styles = theme => ({
	appBar: {
		boxShadow: 'none',
		zIndex: theme.zIndex.drawer + 1,
	},
	flex: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
})

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			user: userSelector,
		},
	})
)(MenuBar)
