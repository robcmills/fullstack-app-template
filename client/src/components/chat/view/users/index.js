import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import AddUser from './add'
import UsersList from './list'
import { fetchUsers } from 'redux/action-creators'

class Users extends Component {
	componentDidMount() {
		fetchUsers()
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.users}>
				<ActionBar>
					<div className={classes.actions}>
						<AddUser />
					</div>
				</ActionBar>
				<UsersList />
			</div>
		)
	}
}

const styles = theme => ({
	users: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
	actions: {
		display: 'flex',
		flex: '1 1 auto',
		justifyContent: 'flex-end',
		padding: `0 ${theme.spacing.unit}px`,
	},
})

export default withStyles(styles)(Users)
