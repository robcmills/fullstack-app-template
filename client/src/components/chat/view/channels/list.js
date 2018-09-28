import React from 'react'
import { compose } from 'recompose'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'

import ChannelsListItem from './list-item'
import sweetConnect from 'redux/sweet-connect'
import {
	channelsSelector,
	isFetchingChannelsSelector,
} from 'redux/selectors'

const ChannelsList = ({ channels, classes, isFetchingChannels }) =>
	<div className={classes.list}>
		<List component="div" disablePadding>
			{
				channels.map((channel, index) =>
					<ChannelsListItem channel={channel} key={index} />)
			}
		</List>
		{!channels.length && !isFetchingChannels && 'No channels created yet'}
		{!channels.length && isFetchingChannels && 'Fetching channels...'}
	</div>

const styles = theme => ({
	list: {
		background: 'white',
		flex: '1 1 auto',
		height: '100%',
		overflowY: 'scroll',
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
)(ChannelsList)

