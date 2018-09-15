import React, { Component } from 'react'
import { compose, withProps } from 'recompose'

import Message from './message'

import socket from 'socket' // src/socket.js, not a third party library
import { fetchChannelMessages } from 'redux/action-creators'
import sweetConnect from 'redux/sweet-connect'
import {
	isFetchingChannelMessagesSelector,
	messagesByChannelIdSelector,
} from 'redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class ChannelMessages extends Component {
	componentDidMount() {
		const { channelId } = this.props
		fetchChannelMessages({ channelId })
		socket.emit('ENTER_CHANNEL', { channelId })
	}

	componentWillUnmount() {
		const { channelId } = this.props
		socket.emit('EXIT_CHANNEL', { channelId })
	}

	render () {
		const {
			classes,
			isFetchingChannelMessages,
			messages,
		} = this.props
		return (
			<div className={classes.messages}>
				{
					messages.map((message, index) =>
						<Message message={message} key={index} />)
				}
				{!messages.length && !isFetchingChannelMessages && 'No messages yet'}
				{!messages.length && isFetchingChannelMessages && 'Fetching messages...'}
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
			isFetchingChannelMessages: isFetchingChannelMessagesSelector,
			messagesByChannelId: messagesByChannelIdSelector,
		},
	}),
	withProps(({ channelId, messagesByChannelId }) => ({
		messages: messagesByChannelId[channelId] || [],
	}))
)(ChannelMessages)
