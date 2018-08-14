import React, { Component } from 'react'
import _ from 'lodash'
import Input from '@material-ui/core/Input'
import sweetConnect from '../../redux/sweet-connect'
import { userSelector } from '../../redux/selectors'
import { sendMessage } from '../../redux/action-creators'
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
		const { channel, user } = this.props
		const message = {
			channelId: channel.id,
			content: this.state.message,
			userId: user.id,
		}
		sendMessage(message)
		this.setState({ message: '' })
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.messageInput}>
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
		)
	}
}

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

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			user: userSelector,
		},
	}),
)(MessageInput)
