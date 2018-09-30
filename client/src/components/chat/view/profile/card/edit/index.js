import React, { Component } from 'react'
import { compose, isEmpty, values, reject } from 'ramda'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import Card from 'components/shared/card'
import DisplayAvatar from '../display/avatar'
import Field from './field'
import Actions from './actions'
import capitalize from 'utils/capitalize'
import { updateUserProfile } from 'redux/action-creators'

const MAX_AVATAR_SIZE = 512
const VARCHAR_MAX_LENGTH = 250
const errors = {
	MAX_AVATAR_SIZE_EXCEEDED:
		`Avatar img is too large. The max dimension is ${MAX_AVATAR_SIZE}px`,
	AVATAR_LOAD_ERROR: 'Could not load image',
	NO_USERNAME_OR_NAME: 'At least one of "Username" or "Name" must not be empty',
	VARCHAR_MAX_EXCEEDED: `Value must not be more than ${VARCHAR_MAX_LENGTH} characters`
}

class EditCard extends Component {
	constructor(props) {
		super(props)
		const { profile: { name, picture }, username } = props.user
		this.state = {
			errors: {},
			isLoading: false,
			isUpdating: false,
			isValidating: false,
			name,
			picture,
			username,
		}
	}

	handleChange = name => event => {
		const value = event.target.value
		const validator = this[`validate${capitalize(name)}`]
		validator && validator(value)
		this.setState({ [name]: value })
	}

	validatePicture = src => {
		if (isEmpty(src)) {
			this.setState({
				errors: { picture: '' },
				isLoading: false,
				isValidating: false,
			})
			return
		}
		this.setState({
			errors: { picture: '' },
			isLoading: true,
			isValidating: true,
		})
		const img = new Image()
		img.onload = () => {
			if (img.height > MAX_AVATAR_SIZE || img.width > MAX_AVATAR_SIZE) {
				this.setState({ errors: { picture: errors.MAX_AVATAR_SIZE_EXCEEDED }})
			}
			this.setState({ isLoading: false, isValidating: false })
		}
		img.onerror = (error) => {
			this.setState({
				errors: { picture: errors.AVATAR_LOAD_ERROR },
				isLoading: false,
				isValidating: false,
			})
		}
		img.src = src
	}

	validateUsername = value => {
		if (value.length > VARCHAR_MAX_LENGTH) {
			this.setState({ errors: { username: errors.VARCHAR_MAX_EXCEEDED } })
			return
		}
		if (!value && !this.state.name) {
			this.setState({ errors: { username: errors.NO_USERNAME_OR_NAME } })
			return
		}
		this.setState({ errors: { username: '' }})
		if (this.state.errors.name === errors.NO_USERNAME_OR_NAME) {
			this.setState({ errors: { name: '' }})
		}
	}

	validateName = value => {
		if (value.length > VARCHAR_MAX_LENGTH) {
			this.setState({ errors: { name: errors.VARCHAR_MAX_EXCEEDED } })
			return
		}
		if (!value && !this.state.username) {
			this.setState({ errors: { name: errors.NO_USERNAME_OR_NAME } })
			return
		}
		this.setState({ errors: { name: '' }})
		if (this.state.errors.username === errors.NO_USERNAME_OR_NAME) {
			this.setState({ errors: { username: '' }})
		}
	}

	isSubmitDisabled = () => {
		const isValid = compose(
			isEmpty,
			reject(isEmpty),
			values
		)(this.state.errors)
		return this.state.isValidating || this.state.isUpdating || !isValid
	}

	handleSubmit = () => {
		this.setState({ isUpdating: true })
		updateUserProfile({
			picture: this.state.picture,
			name: this.state.name,
			username: this.state.username,
			userId: this.props.user.id,
		}).then(result => {
			if (result instanceof Error) {
				console.error('update error', result)
			} else {
				console.log('update success', result)
			}
			this.props.handleCancel()
		})
	}

	render() {
		const { classes, handleCancel } = this.props
		return (
			<Card className={classes.card}>
				{this.state.isLoading
					? <CircularProgress size={128} />
					: <DisplayAvatar src={this.state.picture} />
				}
				<Field
					error={this.state.errors.picture}
					name="Avatar src"
					onChange={this.handleChange('picture')}
					value={this.state.picture}
				/>
				<Field
					error={this.state.errors.username}
					name="Username"
					onChange={this.handleChange('username')}
					value={this.state.username}
				/>
				<Field
					error={this.state.errors.name}
					name="Name"
					onChange={this.handleChange('name')}
					value={this.state.name}
				/>
				<Actions
					handleCancel={handleCancel}
					handleSubmit={this.handleSubmit}
					isSubmitDisabled={this.isSubmitDisabled()}
					isUpdating={this.state.isUpdating}
				/>
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