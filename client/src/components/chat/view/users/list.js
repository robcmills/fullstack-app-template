import React from 'react'
import { compose } from 'recompose'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'

import UsersListItem from './list-item'
import sweetConnect from 'redux/sweet-connect'
import {
	usersSelector,
	isFetchingUsersSelector,
} from 'redux/selectors'

const UsersList = ({ users, classes, isFetchingUsers }) =>
	<div className={classes.list}>
		<List component="div" disablePadding>
			{users.map((user, index) => <UsersListItem user={user} key={index} />)}
		</List>
		{!users.length && !isFetchingUsers && 'No users created yet'}
		{!users.length && isFetchingUsers && 'Fetching users...'}
	</div>

const styles = theme => ({
	list: {
		background: 'white',
		height: '100%',
		flex: '1 1 auto',
		overflowY: 'scroll',
		width: '100%',
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			users: usersSelector,
			isFetchingUsers: isFetchingUsersSelector,
		},
	}),
)(UsersList)

