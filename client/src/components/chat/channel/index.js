import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

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
		const { classes, channel = {}, isFetchingChannel } = this.props
		return isFetchingChannel ?
			<div /> :
			<div className={classes.channel}>
				Channel Name: {channel.name}
			</div>
	}
}

const styles = theme => ({
	channels: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
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
