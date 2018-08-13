import React from 'react'
import MessageInput from './message-input'
import { withStyles } from '@material-ui/core/styles'

const ChannelMessages = ({
	activeChannel,
	classes,
}) =>
	<div className={classes.container}>
		<div className={classes.input}><MessageInput /></div>
		<div className={classes.messages}>Channel Messages</div>
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
		display: 'flex',
		flex: '0 0 50px',
		'align-items': 'center',
		'justify-content': 'center',
	},
})

export default withStyles(styles)(ChannelMessages)
