import React, { Component } from 'react'
import { compose } from 'recompose'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from 'redux/sweet-connect'
import { userSelector } from 'redux/selectors'
import { logout } from 'redux/action-creators'

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
		const { classes, user: { profile, username } } = this.props
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)
		return (
			<div className={classes.userMenu}>
				<Button
					aria-owns={open ? 'menu-appbar' : null}
					aria-haspopup="true"
					className={classes.button}
					color="inherit"
					onClick={this.handleMenu}
					style={{ textTransform: 'none' }}
				>
					{profile.picture ?
						<Avatar
							alt={username || profile.name}
							src={profile.picture}
						/> :
						<AccountCircle />
					}
					&nbsp;&nbsp;
					<Typography
						className={classes.flex}
						color="inherit"
						noWrap
						title={username || profile.name}
					>
						{username || profile.name}
					</Typography>
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

const styles = theme => ({
	userMenu: {
		display: 'flex',
		flex: '0 0 auto',
		maxWidth: '40%',
		overflow: 'hidden',
	},
	button: {
		padding: theme.spacing.unit / 2,
	}
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			user: userSelector,
		}
	}),
)(UserMenu)