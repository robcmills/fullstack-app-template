import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import AddUser from './add'
// import List from './list'
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
				List of Users
			</div>
		)
	}
}

const styles = theme => ({
	users: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
	},
	actions: {
		display: 'flex',
		flex: '1 1 auto',
		justifyContent: 'flex-end',
		padding: `0 ${theme.spacing.unit}px`,
	},
})

export default withStyles(styles)(Users)
