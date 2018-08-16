import React, { Component } from 'react'
import _ from 'lodash'
import { withProps } from 'recompose'

import MessageInput from './message-input'
import ChannelMessage from './channel-message'

import { fetchMessages } from '../../redux/action-creators'
import sweetConnect from '../../redux/sweet-connect'
import { messagesByChannelIdSelector } from '../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class ChannelMessages extends Component {
	componentDidMount() {
		fetchMessages({ channelId: this.props.channel.id })
	}

	render () {
		const {
			channel,
			classes,
			messages,
		} = this.props
		return (
			<div className={classes.container}>
				<div className={classes.input}>
					<MessageInput channel={channel} />
				</div>
				<div className={classes.messages}>
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
		padding: '10px',
	},
	input: {
		display: 'flex',
		flex: '0 0 50px',
		'align-items': 'center',
		'justify-content': 'center',
	},
})

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			messagesByChannelId: messagesByChannelIdSelector,
		},
	}),
	withProps(({ channel = {}, messagesByChannelId }) => ({
		messages: messagesByChannelId[channel.id] || [],
	}))
)(ChannelMessages)
