import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from '../../../redux/sweet-connect'
import { fetchMessages, toggleDrawer } from '../../../redux/action-creators'
import { isDrawerOpenSelector } from '../../../redux/selectors'

class ChannelListItem extends Component {
	handleClick = () => {
		const { channel, isDrawerOpen } = this.props
		fetchMessages({ channelId: channel.id })
		if (isDrawerOpen) {
			toggleDrawer()
		}
	}

	render() {
		const {
			classes,
			channel,
			isActive
		} = this.props
		return (
			<ListItem
				button
				classes={{
					button: isActive && classes.button,
					root: isActive && classes.background,
				}}
				component={Link}
				dense
				onClick={this.handleClick}
				to={`/channels/${channel.id}`}
			>
				<ListItemText
					classes={{ textDense: isActive && classes.text }}
					primary={channel.name}
				/>
			</ListItem>
		)
	}
}

const styles = theme => ({
	background: {
		backgroundColor: theme.palette.primary.main,
		color: 'white'
	},
	button: {
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		}
	},
	text: {
		color: 'inherit',
	}
})

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isDrawerOpen: isDrawerOpenSelector,
		}
	}),
)(ChannelListItem)
