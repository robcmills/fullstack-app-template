import React from 'react'
import _ from 'lodash'
import { withProps } from 'recompose'

import sweetConnect from '../../redux/sweet-connect'
import { channelsByIdSelector } from '../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

const Messages = ({
	activeChannel = {},
	classes,
}) =>
	<div className={classes.messages}>
		<div className={classes.toolbar} />
		<div>Messages for channel: {activeChannel.name}</div>
	</div>

const styles = theme => ({
	messages: {
		flex: '1 1 auto',
		padding: '1em',
	},
	toolbar: theme.mixins.toolbar,
})

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channelsById: channelsByIdSelector,
		}
	}),
	withProps(({ channelsById, match }) => ({
		activeChannel: channelsById[match.params.channel_id]
	}))
)(Messages)
