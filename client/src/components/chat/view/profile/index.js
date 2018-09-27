import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'

import Bold from 'components/shared/bold'
import sweetConnect from 'redux/sweet-connect'
import { fetchUser } from 'redux/action-creators'
import { isFetchingUserSelector, userByIdSelector } from 'redux/selectors'

class Profile extends Component {
	componentDidMount() {
		const { userId } = this.props
		fetchUser({ userId })
	}

	render() {
		console.log('user', this.props.user)
		const { classes, user } = this.props
		if (!user) {
			return (
				<div className={classes.profile}>Fetching user...</div>
			)
		}
		const { profile: { name, picture }, username } = user
		return (
			<div className={classes.profile}>
				<div className={classes.row}>
					{picture ?
						<Avatar
							alt={username || name}
							className={classes.avatar}
							src={picture}
						/> :
						<AccountCircle color="secondary" className={classes.avatar} />
					}
				</div>
				<div className={classes.row}>
					<Typography><Bold>Username:</Bold>&nbsp;{username || 'undefined'}</Typography>
				</div>
				<div className={classes.row}>
					<Typography><Bold>Name:</Bold>&nbsp;{name || 'undefined'}</Typography>
				</div>
			</div>
		)
	}
}

const styles = theme => ({
	profile: {
		padding: theme.spacing.unit * 2,
	},
	avatar: {
		height: 64,
		width: 64,
	},
	row: {
		display: 'flex',
		paddingBottom: theme.spacing.unit * 2,
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
