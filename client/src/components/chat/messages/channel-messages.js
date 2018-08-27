import React, { Component } from 'react'
import { compose, withProps } from 'recompose'

import MessageInput from './message-input'
import ChannelMessage from './channel-message'
import Divider from '@material-ui/core/Divider'

import { fetchMessages } from '../../../redux/action-creators'
import sweetConnect from '../../../redux/sweet-connect'
import {
	isFetchingMessagesSelector,
	messagesByChannelIdSelector,
} from '../../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class ChannelMessages extends Component {
	componentDidMount() {
		fetchMessages({ channelId: this.props.channel.id })
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
			isFetchingMessages: isFetchingMessagesSelector,
			messagesByChannelId: messagesByChannelIdSelector,
		},
	}),
	withProps(({ channel = {}, messagesByChannelId }) => ({
		messages: messagesByChannelId[channel.id] || [],
	}))
)(ChannelMessages)
