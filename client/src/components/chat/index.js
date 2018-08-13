import React, { Component } from 'react'
import _ from 'lodash'
import { withProps } from 'recompose'

import MenuBar from './menu-bar'
import Drawer from './drawer'
import Messages from './messages'

import sweetConnect from '../../redux/sweet-connect'
import { channelsByIdSelector } from '../../redux/selectors'
import { fetchChannels, fetchUsers } from '../../redux/action-creators'
import { withStyles } from '@material-ui/core/styles'

class Chat extends Component {
	componentDidMount() {
		fetchChannels()
		fetchUsers()
	}

	render() {
		const { activeChannel, classes } = this.props
		return (
			<div className={classes.chat}>
				<MenuBar activeChannel={activeChannel} />
				<Drawer activeChannel={activeChannel} />
				<Messages activeChannel={activeChannel} />
			</div>
		)
	}
}

const styles = {
	chat: {
		display: 'flex',
	},
}

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channelsById: channelsByIdSelector,
		}
	}),
	withProps(({ channelsById, match }) => ({
		activeChannel: channelsById[match.params.channel_id]
	}))
)(Chat)
