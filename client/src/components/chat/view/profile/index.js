import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import ProfileCard from './card'

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
				{user ? <ProfileCard user={user} /> : 'Fetching user...'}
			</div>
		)
	}
}

const styles = theme => ({
	profile: {
		alignItems: 'flex-start',
		display: 'flex',
		flex: '1 1 auto',
		height: '100%',
		overflowY: 'scroll',
		padding: theme.spacing.unit * 2,
		[theme.breakpoints.only('sm')]: {
			alignItems: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			alignItems: 'stretch',
		},
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
