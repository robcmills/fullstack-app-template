import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import MessageInput from './message-input'
import DirectMessages from './messages'
import sweetConnect from 'redux/sweet-connect'
import { fetchUser } from 'redux/action-creators'
import { isFetchingUserSelector } from 'redux/selectors'

class UserChat extends Component {
	componentDidMount() {
		const { userId } = this.props
		fetchUser({ userId })
	}

	render() {
		const { classes, userId } = this.props
		return (
			<div className={classes.userChat}>
				<ActionBar>
					<MessageInput recipientUserId={userId} />
				</ActionBar>
				<DirectMessages userId={userId} />
			</div>
		)
	}
}

const styles = theme => ({
	userChat: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isFetchingUser: isFetchingUserSelector,
		}
	}),
	withProps(({ match }) => ({
		userId: match.params.user_id,
	}))
)(UserChat)
