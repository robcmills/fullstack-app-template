import React, { Component } from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import Channel from './channel'
import sweetConnect from '../../../redux/sweet-connect'
import { fetchChannels } from '../../../redux/action-creators'
import {
	channelsSelector,
	isFetchingChannelsSelector,
} from '../../../redux/selectors'

class Channels extends Component {
	componentDidMount() {
		fetchChannels()
	}

	render() {
		const { classes, channels, isFetchingChannels } = this.props
		return isFetchingChannels ?
			<div /> :
			<div className={classes.channels}>
				<div className={classes.toolbar} />
				<div className={classes.children}>
					{
						channels.map((channel, index) =>
							<Channel channel={channel} key={index} />)
					}
					{
						!channels.length &&
							<div className={classes.noChannels}>No channels created yet</div>
					}
				</div>
			</div>
	}
}

const styles = theme => ({
	channels: {
		display: 'flex',
		flex: '1 1 auto',
		height: '100vh',
		'flex-direction': 'column',
	},
	toolbar: theme.mixins.toolbar,
	children: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
	},
	noChannels: {
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
