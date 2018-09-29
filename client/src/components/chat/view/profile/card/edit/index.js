import React, { Component } from 'react'
import { compose, isEmpty, values, reject } from 'ramda'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import Card from 'components/shared/card'
import DisplayAvatar from '../display/avatar'
import Field from './field'
import Actions from './actions'
import capitalize from 'utils/capitalize'

const MAX_AVATAR_SIZE = 512
const errors = {
	MAX_AVATAR_SIZE_EXCEEDED:
		`Avatar img is too large. The max dimension is ${MAX_AVATAR_SIZE}px`,
	AVATAR_LOAD_ERROR: 'Error occurred trying to load image',
}

class EditCard extends Component {
	constructor(props) {
		super(props)
		const { profile: { name, picture }, username } = props.user
		this.state = {
			errors: {},
			isLoading: false,
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
		this.setState({
			[name]: value,
		})
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

	isSubmitDisabled = () => {
		const isValid = compose(
			isEmpty,
			reject(isEmpty),
			values
		)(this.state.errors)
		return this.state.isValidating || !isValid
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
					name="Username"
					onChange={this.handleChange('username')}
					value={this.state.username}
				/>
				<Field
					name="Name"
					onChange={this.handleChange('name')}
					value={this.state.name}
				/>
				<Actions
					handleCancel={handleCancel}
					isSubmitDisabled={this.isSubmitDisabled()}
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