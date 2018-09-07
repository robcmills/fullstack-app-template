import React, { Component } from 'react'
import { compose, withProps } from 'recompose'

import MenuBar from './menu-bar'
import Drawer from './drawer'
import View from './view'

import sweetConnect from '../../redux/sweet-connect'
import { channelsByIdSelector } from '../../redux/selectors'
import { fetchUsers } from '../../redux/action-creators'
import { withStyles } from '@material-ui/core/styles'

class Chat extends Component {
	componentDidMount() {
		fetchUsers()
	}

	render() {
		const { activeChannel, activePath, classes } = this.props
		return (
			<div className={classes.chat}>
				<MenuBar activeChannel={activeChannel} activePath={activePath} />
				<Drawer activeChannel={activeChannel} />
				<View />
			</div>
		)
	}
}

const styles = {
	chat: {
		display: 'flex',
	},
}

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channelsById: channelsByIdSelector,
		}
	}),
	withProps(({ channelsById, match }) => ({
		activeChannel: channelsById[match.params.channel_id],
		activePath: match.path,
	}))
)(Chat)
