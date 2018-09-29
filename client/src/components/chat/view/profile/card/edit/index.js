import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Card from 'components/shared/card'
import DisplayAvatar from '../display/avatar'
import Field from './field'
import Actions from './actions'

class EditCard extends Component {
	constructor(props) {
		super(props)
		const { profile: { name, picture }, username } = props.user
		this.state = {
			errors: {},
			name,
			picture,
			username,
		}
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		})
	}

	render() {
		const { classes, handleCancel, user } = this.props
		const { profile: { name, picture }, username } = user
		return (
			<Card className={classes.card}>
				<DisplayAvatar alt={username || name} src={picture} />
				<Field
					name="Avatar src"
					onChange={this.handleChange('picture')}
					value={this.state.picture}
				/>
				<Field
					name="Username"
					onChange={this.handleChange('username')}
					value={this.state.username}
				/>
				<Field
					name="Name"
					onChange={this.handleChange('name')}
					value={this.state.name}
				/>
				<Actions handleCancel={handleCancel} />
			</Card>
		)
	}
}

const styles = theme => ({
	card: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		padding: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditCard)