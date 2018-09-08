import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

import MessageInput from './message-input'
import Messages from './messages'
import sweetConnect from '../../../../redux/sweet-connect'
import { fetchChannel } from '../../../../redux/action-creators'
import {
	channelsByIdSelector,
	isFetchingChannelSelector,
} from '../../../../redux/selectors'

class Channel extends Component {
	componentDidMount() {
		const { channelId } = this.props
		fetchChannel({ channelId })
	}

	render() {
		const { channelId, classes } = this.props
		return (
			<div className={classes.container}>
				<div className={classes.input}>
					<MessageInput channelId={channelId} />
				</div>
				<Divider />
				<Messages channelId={channelId} />
			</div>
		)
	}
}

const styles = theme => ({
	container: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
	},
	input: {
		background: theme.palette.grey['50'],
		display: 'flex',
		flex: '0 0 50px',
		'align-items': 'center',
		'justify-content': 'center',
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
