import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const ChannelMessages = ({
	activeChannel,
	classes,
}) =>
	<div className={classes.container}>
		<div className={classes.messages}>Channel Messages</div>
		<div className={classes.input}>Input</div>
	</div>

const styles = theme => ({
	container: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
	},
	messages: {
		flex: '1 1 auto',
	},
	input: {
		flex: '0 0 50px',
	},
})

export default withStyles(styles)(ChannelMessages)
