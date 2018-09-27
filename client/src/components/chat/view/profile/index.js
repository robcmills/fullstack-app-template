import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
// import Avatar from '@material-ui/core/Avatar'

import sweetConnect from 'redux/sweet-connect'
import { fetchUser } from 'redux/action-creators'
import { isFetchingUserSelector, userByIdSelector } from 'redux/selectors'

class Profile extends Component {
	componentDidMount() {
		const { userId } = this.props
		fetchUser({ userId })
	}

	render() {
		const { classes, user } = this.props
		return (
			<div className={classes.profile}>
				User Profile Page!
				<div className={classes.avatar}>
					Avatar
				</div>
				{JSON.stringify(user)}
			</div>
		)
	}
}

const styles = theme => ({
	profile: {
		padding: theme.spacing.unit,
	},
})

export default compose(
	withStyles(styles),
	withProps(({ match }) => ({
		userId: match.params.user_id,
	})),
	sweetConnect({
		selectors: {
			isFetchingUser: isFetchingUserSelector,
			user: userByIdSelector,
		}
	}),
)(Profile)
