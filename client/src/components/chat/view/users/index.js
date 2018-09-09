import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

// import ActionBar from '../action-bar'
// import List from './list'
import { fetchUsers } from '../../../../redux/action-creators'

class Users extends Component {
	componentDidMount() {
		fetchUsers()
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.users}>
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
		padding: theme.spacing.unit,
	},
})

export default withStyles(styles)(Users)
