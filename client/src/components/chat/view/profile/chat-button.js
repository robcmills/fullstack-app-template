import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { withStyles } from '@material-ui/core/styles'

const ChatButton = ({ classes, userId }) =>
	<Button
		className={classes.chatButton}
		color="secondary"
		component={Link}
		size="small"
		to={`/chat/users/${userId}`}
		variant="outlined"
	>
		<ChatBubbleIcon className={classes.chatIcon} />&nbsp;Chat
	</Button>

const styles = theme => ({
	chatButton: {
		marginTop: theme.spacing.unit * 3,
	},
	chatIcon: {
		height: theme.spacing.unit * 2,
		width: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(ChatButton)