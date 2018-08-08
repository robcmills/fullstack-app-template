import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Messages = ({
	activeChannel,
	classes,
}) =>
	<div className={classes.messages}>
		<div className={classes.toolbar} />
		<div>{activeChannel
			? `Messages for channel: ${activeChannel.name}`
			: 'No channel selected'}
		</div>
	</div>

const styles = theme => ({
	messages: {
		flex: '1 1 auto',
		padding: '1em',
	},
	toolbar: theme.mixins.toolbar,
})

export default withStyles(styles)(Messages)
