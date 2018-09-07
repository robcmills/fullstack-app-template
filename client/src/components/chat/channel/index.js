import React, { Component } from 'react'
import { compose, withProps } from 'recompose'

import ChannelMessages from '../messages/channel-messages'
import sweetConnect from '../../../redux/sweet-connect'
import { fetchChannel } from '../../../redux/action-creators'
import {
	channelsByIdSelector,
	isFetchingChannelSelector,
} from '../../../redux/selectors'

class Channel extends Component {
	componentDidMount() {
		const { channelId } = this.props
		fetchChannel({ channelId })
	}

	render() {
		const { channel = {}, isFetchingChannel } = this.props
		return isFetchingChannel ?
			<div /> :
			<ChannelMessages channel={channel} />
	}
}

export default compose(
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
