import React, { Component } from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import Channel from './channel'
import sweetConnect from '../../../../redux/sweet-connect'
import { fetchChannels } from '../../../../redux/action-creators'
import {
	channelsSelector,
	isFetchingChannelsSelector,
} from '../../../../redux/selectors'

class Channels extends Component {
	componentDidMount() {
		fetchChannels()
	}

	render() {
		const { classes, channels, isFetchingChannels } = this.props
		return (
			<div className={classes.channels}>
				{
					channels.map((channel, index) =>
						<Channel channel={channel} key={index} />)
				}
				{!channels.length && !isFetchingChannels && 'No channels created yet'}
				{!channels.length && isFetchingChannels && 'Fetching channels...'}
			</div>
		)
	}
}

const styles = theme => ({
	channels: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		padding: theme.spacing.unit,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channels: channelsSelector,
			isFetchingChannels: isFetchingChannelsSelector,
		}
	}),
)(Channels)
