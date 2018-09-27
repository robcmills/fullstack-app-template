import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import setPictureSize from 'utils/set-picture-size'
import Card from 'components/shared/card'
import Bold from 'components/shared/bold'
import Spacer from 'components/shared/spacer'
import sweetConnect from 'redux/sweet-connect'
import { fetchUser } from 'redux/action-creators'
import { isFetchingUserSelector, userSelector, userByIdSelector } from 'redux/selectors'

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
		return (
			<div className={classes.padding}>
				<Card className={classes.card}>
					<div className={classes.padding}>
						{picture ?
							<Avatar
								alt={username || name}
								className={classes.avatar}
								src={setPictureSize(picture, 256)}
							/> :
							<AccountCircle color="secondary" className={classes.avatar} />
						}
						<Spacer />
						<Typography noWrap>
							<Bold>Username:</Bold>&nbsp;{username || 'undefined'}
						</Typography>
						<Spacer />
						<Typography noWrap>
							<Bold>Name:</Bold>&nbsp;{name || 'undefined'}
						</Typography>
						<Spacer /><Spacer /><Spacer />
						{user.id !== me.id &&
							<Button
								color="secondary"
								component={Link}
								size="small"
								to={`/chat/users/${user.id}`}
								variant="outlined"
							>
								<ChatBubbleIcon className={classes.actionIcon} />&nbsp;
								Direct Message
							</Button>
						}
					</div>
				</Card>
			</div>
		)
	}
}

const styles = theme => ({
	padding: {
		padding: theme.spacing.unit * 2,
	},
	card: {
		maxWidth: 400,
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
