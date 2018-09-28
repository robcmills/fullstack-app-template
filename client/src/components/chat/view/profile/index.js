import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'

import setPictureSize from 'utils/set-picture-size'
import Card from 'components/shared/card'
import Bold from 'components/shared/bold'
import Spacer from 'components/shared/spacer'

import EditButton from './edit-button'
import ChatButton from './chat-button'

import sweetConnect from 'redux/sweet-connect'
import { fetchUser } from 'redux/action-creators'
import {
	isFetchingUserSelector,
	userSelector,
	userByIdSelector,
} from 'redux/selectors'

class Profile extends Component {
	componentDidMount() {
		const { userId } = this.props
		fetchUser({ userId })
	}

	render() {
		const { classes, me, user } = this.props
		if (!user) {
			return (
				<div className={classes.profile}>Fetching user...</div>
			)
		}
		const { profile: { name, picture }, username } = user
		const isMe = user.id === me.id
		return (
			<div className={classes.profile}>
				<Card className={classes.card}>
					{picture ?
						<Avatar
							alt={username || name}
							className={classes.avatar}
							src={setPictureSize(picture, 256)}
						/> :
						<AccountCircle color="secondary" className={classes.avatar} />
					}
					<Spacer /><Spacer />
					<Typography noWrap>
						<Bold>Username:</Bold>&nbsp;{username || 'undefined'}
					</Typography>
					<Spacer />
					<Typography noWrap>
						<Bold>Name:</Bold>&nbsp;{name || 'undefined'}
					</Typography>
					{isMe ? <EditButton /> : <ChatButton userId={user.id} />}
				</Card>
			</div>
		)
	}
}

const styles = theme => ({
	profile: {
		alignItems: 'flex-start',
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
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
	card: {
		alignItems: 'center',
		display: 'flex',
		flex: '0 0 auto',
		flexDirection: 'column',
		padding: theme.spacing.unit * 2,
	},
	avatar: {
		height: 128,
		width: 128,
	},
	actionIcon: {
		height: 16,
		width: 16,
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
			me: userSelector,
			user: userByIdSelector,
		}
	}),
)(Profile)
