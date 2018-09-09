import React from 'react'
import { compose } from 'recompose'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from 'redux/sweet-connect'
import { usersSelector } from 'redux/selectors'

class UsersList extends React.Component {
	state = { open: true }

	handleClick = () => {
		this.setState(state => ({ open: !state.open }))
	}

	render() {
		const { classes, users } = this.props

		return (
			<div className={classes.users}>
				<List component="nav">
					<ListItem button onClick={this.handleClick} classes={{ root: classes.primaryColor }}>
						<ListItemIcon classes={{ root: classes.primaryColor }}>
							<AccountCircle />
						</ListItemIcon>
						<ListItemText primary="Users" classes={{
							root: classes.listItemTextRoot,
							primary: classes.primaryColor }} />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{users.map((user, index) =>
								<ListItem button dense key={index}>
									<ListItemText primary={user.username} />
								</ListItem>
							)}
						</List>
					</Collapse>
				</List>
			</div>
		)
	}
}

const styles = theme => ({
	users: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	primaryColor: {
		color: theme.palette.primary.main,
	},
	listItemTextRoot: {
		padding: 0,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			users: usersSelector,
		},
	}),
)(UsersList)
