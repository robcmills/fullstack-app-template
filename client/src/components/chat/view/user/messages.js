import React, { Component } from 'react'
import { compose } from 'recompose'

import Message from './message'
import socket from 'socket' // src/socket.js, not a third party library
import { fetchDirectMessages } from 'redux/action-creators'
import sweetConnect from 'redux/sweet-connect'
import {
	isFetchingDirectMessagesSelector,
	userSelector,
} from 'redux/selectors'
import directMessagesSelector from './selector'
import { withStyles } from '@material-ui/core/styles'

class DirectMessages extends Component {
	componentDidMount() {
		const { me, userId } = this.props
		fetchDirectMessages({ userId })
		socket.emit('ENTER_USER_CHANNEL', { userId: me.id })
	}

	componentWillUnmount() {
		const { me } = this.props
		socket.emit('EXIT_USER_CHANNEL', { userId: me.id })
	}

	render () {
		const {
			classes,
			isFetchingDirectMessages,
			directMessages,
		} = this.props
		return (
			<div className={classes.messages}>
				{
					directMessages.map((message, index) =>
						<Message message={message} key={index} />)
				}
				{!directMessages.length && !isFetchingDirectMessages && 'No messages yet'}
				{!directMessages.length && isFetchingDirectMessages && 'Fetching messages...'}
			</div>
		)
	}
}

const styles = theme => ({
	messages: {
		flex: '1 1 auto',
		height: '100%',
		overflowY: 'scroll',
		padding: theme.spacing.unit,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isFetchingDirectMessages: isFetchingDirectMessagesSelector,
			me: userSelector,
			directMessages: directMessagesSelector,
		},
	}),
)(DirectMessages)
