import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import sweetConnect from '../../../redux/sweet-connect'
import { userSelector } from '../../../redux/selectors'
import { logout } from '../../../redux/action-creators'

class UserMenu extends Component {
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
		const { user: { username } } = this.props
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)
		return (
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
		)
	}
}

export default sweetConnect({
	selectors: {
		user: userSelector,
	},
})(UserMenu)
