import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import { fetchMessages } from '../../../redux/action-creators'

const ChannelListItem = ({
	classes,
	channel,
	isActive
}) =>
	<ListItem
		button
		classes={{
			button: isActive && classes.button,
			root: isActive && classes.background,
		}}
		component={Link}
		dense
		onClick={() => fetchMessages({ channelId: channel.id })}
		to={`/channels/${channel.id}`}
	>
		<ListItemText
			classes={{ textDense: isActive && classes.text }}
			primary={channel.name}
		/>
	</ListItem>

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

export default withStyles(styles)(ChannelListItem)
