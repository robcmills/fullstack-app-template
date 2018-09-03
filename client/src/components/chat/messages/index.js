import React from 'react'
import { compose } from 'recompose'
import ChannelMessages from './channel-messages'
import { withStyles } from '@material-ui/core/styles'
import sweetConnect from '../../../redux/sweet-connect'
import { isFetchingChannelsSelector } from '../../../redux/selectors'

const Messages = ({
	activeChannel,
	classes,
	isFetchingChannels,
}) => isFetchingChannels ?
	<div /> :
	<div className={classes.messages}>
		<div className={classes.toolbar} />
		<div className={classes.children}>{activeChannel
			? <ChannelMessages channel={activeChannel} />
			: <div className={classes.noChannel}>No channel selected</div>}
		</div>
	</div>

const styles = theme => ({
	messages: {
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
	noChannel: {
		padding: theme.spacing.unit,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isFetchingChannels: isFetchingChannelsSelector,
		}
	}),
)(Messages)
