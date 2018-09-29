import React, { Component } from 'react'

import Edit from './edit'
import Display from './display'

import sweetConnect from 'redux/sweet-connect'
import { userSelector } from 'redux/selectors'

class ProfileCard extends Component {
	state = {
		isEditing: false,
	}

	handleCancel = () => {
		this.setState({ isEditing: false })
	}

	handleEditClick = () => {
		this.setState({ isEditing: true })
	}

	render() {
		const { me, user } = this.props
		const isMe = user.id === me.id

		return this.state.isEditing ?
		 	<Edit handleCancel={this.handleCancel} user={user} /> :
		 	<Display
		 		handleEditClick={isMe ? this.handleEditClick : undefined}
		 		isMe={isMe}
		 		user={user}
		 	/>
	}
}

export default sweetConnect({
	selectors: {
		me: userSelector,
	},
})(ProfileCard)
