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
				{
					!channels.length && !isFetchingChannels &&
						<div className={classes.padding}>No channels created yet</div>
				}
				{
					!channels.length && isFetchingChannels &&
						<div className={classes.padding}>Fetching channels...</div>
				}
			</div>
		)
	}
}

const styles = theme => ({
	channels: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
	},
	padding: {
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
