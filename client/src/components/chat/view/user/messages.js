import React, { Component } from 'react'
import { compose, withProps } from 'recompose'

import Message from './message'

import socket from 'socket' // src/socket.js, not a third party library
import { fetchUserMessages } from 'redux/action-creators'
import sweetConnect from 'redux/sweet-connect'
import {
	isFetchingUserMessagesSelector,
	messagesByUserIdSelector,
	userSelector,
} from 'redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class UserMessages extends Component {
	componentDidMount() {
		const { recipientUserId, userId: senderUserId } = this.props
		fetchUserMessages({ userId: senderUserId })
		socket.emit('ENTER_USER_CHANNEL', { recipientUserId, senderUserId })
	}

	componentWillUnmount() {
		const { recipientUserId, userId: senderUserId } = this.props
		socket.emit('EXIT_USER_CHANNEL', { recipientUserId, senderUserId })
	}

	render () {
		const {
			classes,
			isFetchingUserMessages,
			userMessages,
		} = this.props
		return (
			<div className={classes.messages}>
				{
					userMessages.map((message, index) =>
						<Message message={message} key={index} />)
				}
				{!userMessages.length && !isFetchingUserMessages && 'No messages yet'}
				{!userMessages.length && isFetchingUserMessages && 'Fetching messages...'}
			</div>
		)
	}
}

const styles = theme => ({
	messages: {
		flex: '1 1 auto',
		overflowY: 'scroll',
		padding: theme.spacing.unit,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isFetchingUserMessages: isFetchingUserMessagesSelector,
			messagesByUserId: messagesByUserIdSelector,
			user: userSelector,
		},
	}),
	withProps(({ user, userId, messagesByUserId }) => ({
		recipientUserId: user.id,
		userMessages: messagesByUserId[userId] || [],
	}))
)(UserMessages)
