import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import Channel from './channel'
import sweetConnect from '../../../../redux/sweet-connect'
import {
	channelsSelector,
	isFetchingChannelsSelector,
} from '../../../../redux/selectors'

const List = ({ channels, classes, isFetchingChannels }) =>
	<div className={classes.list}>
		{
			channels.map((channel, index) =>
				<Channel channel={channel} key={index} />)
		}
		{!channels.length && !isFetchingChannels && 'No channels created yet'}
		{!channels.length && isFetchingChannels && 'Fetching channels...'}
	</div>

const styles = theme => ({
	list: {
		flex: '1 1 auto',
		overflowY: 'scroll',
		padding: theme.spacing.unit,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channels: channelsSelector,
			isFetchingChannels: isFetchingChannelsSelector,
		},
	}),
)(List)

