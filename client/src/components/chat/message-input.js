import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
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
		sendMessage({
			channelId: this.props.channel.id,
			message: this.state.message,
		})
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

export default withStyles(styles)(MessageInput)
