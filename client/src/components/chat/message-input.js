import React from 'react'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'

const MessageInput = ({
	activeChannel,
	classes,
}) =>
	<div className={classes.messageInput}>
		<Input
			classes={{
				root: classes.root,
				input: classes.input,
				focused: classes.focused,
			}}
			disableUnderline
			fullWidth
		/>
	</div>

const styles = theme => ({
	messageInput: {
		flex: '1 1 auto',
		padding: '0 10px',
	},
	root: {
		background: theme.palette.background.paper,
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: theme.palette.divider,
		borderRadius: theme.shape.borderRadius,
	},
	focused: {
		borderColor: theme.palette.primary.light,
	},
	input: {
		padding: '5px',
	}
})

export default withStyles(styles)(MessageInput)
