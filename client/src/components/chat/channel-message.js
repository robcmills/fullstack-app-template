import React from 'react'
import _ from 'lodash'
import { withProps } from 'recompose'

import sweetConnect from '../../redux/sweet-connect'
import { usersByIdSelector } from '../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

const ChannelMessage = ({
	classes,
	messageContent,
	messageUsername,
}) =>
	<div className={classes.channelMessage}>
		{messageUsername}:{messageContent}
	</div>

const styles = theme => ({
})

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			usersById: usersByIdSelector,
		},
	}),
	withProps(({ usersById, message }) => {
		return {
			messageContent: message.content,
			messageUsername: usersById[message.userId].username,
		}
	})
)(ChannelMessage)
