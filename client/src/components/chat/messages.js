import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Messages = ({ classes, match: { params: { channel_id }} }) =>
	<div className={classes.messages}>
		<div className={classes.toolbar} />
		<div>Messages for channel_id: {channel_id}</div>
	</div>

const styles = theme => ({
	messages: {
		flex: '1 1 auto',
		padding: '1em',
	},
	toolbar: theme.mixins.toolbar,
})

export default withStyles(styles)(Messages)
