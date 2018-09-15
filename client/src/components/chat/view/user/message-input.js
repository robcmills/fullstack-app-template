import React, { Component } from 'react'
import { compose } from 'recompose'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import sweetConnect from 'redux/sweet-connect'
import { userSelector } from 'redux/selectors'
import { sendUserMessage } from 'redux/action-creators'
import { withStyles } from '@material-ui/core/styles'

class MessageInput extends Component {
	state = {
		message: '',
	}

	handleKeyPress = event => {
		if (event.key === 'Enter') {
			this.handleSubmit()
		}
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		})
	}

	handleSubmit = () => {
		const { recipientUserId, user } = this.props
		const message = {
			content: this.state.message,
			createdAt: new Date().toISOString(),
			recipientUserId,
			senderUserId: user.id,
			Sender: {
				id: user.id,
				username: user.username,
			},
		}
		sendUserMessage(message)
		this.setState({ message: '' })
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.messageInput}>
				<div className={classes.inputWrapper}>
					<Input
						classes={{
							root: classes.root,
							input: classes.input,
							focused: classes.focused,
						}}
						disableUnderline
						fullWidth
						onChange={this.handleChange('message')}
						onKeyPress={this.handleKeyPress}
						placeholder="enter a message"
						value={this.state.message}
					/>
				</div>
				<div className={classes.sendWrapper}>
					<IconButton
						aria-label="Send"
						color="primary"
						disabled={!this.state.message}
						onClick={this.handleSubmit}
					>
						<SendIcon />
		      </IconButton>
				</div>
			</div>
		)
	}
}

const styles = theme => ({
	messageInput: {
		display: 'flex',
		flex: '1 1 auto',
	},
	inputWrapper: {
		flex: '1 1 auto',
		padding: 8,
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
	},
	sendWrapper: {
		paddingRight: 8,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			user: userSelector,
		},
	}),
)(MessageInput)
