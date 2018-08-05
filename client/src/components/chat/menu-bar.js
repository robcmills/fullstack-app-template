import React from 'react'
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
import { withStyles } from '@material-ui/core/styles'
import sweetConnect from '../../redux/sweet-connect'
import { userSelector } from '../../redux/selectors'
import { logout } from '../../redux/action-creators'

const styles = {
	root: {
		flexGrow: 1,
	},
	flex: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
}

class MenuBar extends React.Component {
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
		const { classes, user: { username } } = this.props
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)

		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="title" color="inherit" className={classes.flex}>
						Chat
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

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			user: userSelector,
		},
	})
)(MenuBar)
