import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import MessageInput from './message-input'
import Messages from './messages'
import sweetConnect from 'redux/sweet-connect'
import { fetchChannel } from 'redux/action-creators'
import {
	channelsByIdSelector,
	isFetchingChannelSelector,
} from 'redux/selectors'

class Channel extends Component {
	componentDidMount() {
		const { channelId } = this.props
		fetchChannel({ channelId })
	}

	render() {
		const { channelId, classes } = this.props
		return (
			<div className={classes.channel}>
				<ActionBar>
					<MessageInput channelId={channelId} />
				</ActionBar>
				<Messages channelId={channelId} />
			</div>
		)
	}
}

const styles = theme => ({
	channel: {
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
			channelsById: channelsByIdSelector,
			isFetchingChannel: isFetchingChannelSelector,
		}
	}),
	withProps(({ channelsById, match }) => ({
		channel: channelsById[match.params.channel_id],
		channelId: match.params.channel_id,
	}))
)(Channel)
