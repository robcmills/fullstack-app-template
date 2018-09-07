import React, { Component } from 'react'
import { compose, withProps } from 'recompose'

import MessageInput from './message-input'
import ChannelMessage from './channel-message'
import Divider from '@material-ui/core/Divider'

import socket from '../../../socket'
import { fetchMessages } from '../../../redux/action-creators'
import sweetConnect from '../../../redux/sweet-connect'
import {
	channelsByIdSelector,
	isFetchingMessagesSelector,
	messagesByChannelIdSelector,
} from '../../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class ChannelMessages extends Component {
	componentDidMount() {
		const { channel } = this.props
		fetchMessages({ channelId: channel.id })
		socket.emit('ENTER_CHANNEL', { channelId: channel.id })
	}

	componentWillUnmount() {
		const { channel } = this.props
		socket.emit('EXIT_CHANNEL', { channelId: channel.id })
	}

	render () {
		const {
			channel,
			classes,
			isFetchingMessages,
			messages,
		} = this.props
		return (
			<div className={classes.container}>
				<div className={classes.input}>
					<MessageInput channel={channel} />
				</div>
				<Divider />
				<div className={classes.messages}>
					{messages.length === 0 && !isFetchingMessages && 'No messages yet'}
					{messages.map((message, index) =>
						<ChannelMessage key={index} message={message} />)}
				</div>
			</div>
		)
	}
}

const styles = theme => ({
	container: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
	},
	messages: {
		flex: '1 1 auto',
		overflowY: 'scroll',
		padding: '10px',
	},
	input: {
		background: theme.palette.grey['50'],
		display: 'flex',
		flex: '0 0 50px',
		'align-items': 'center',
		'justify-content': 'center',
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channelsById: channelsByIdSelector,
			isFetchingMessages: isFetchingMessagesSelector,
			messagesByChannelId: messagesByChannelIdSelector,
		},
	}),
	withProps(({ channel = {}, channelsById, match, messagesByChannelId }) => ({
		channel: channelsById[match.params.channel_id],
		messages: messagesByChannelId[channel.id] || [],
	}))
)(ChannelMessages)
