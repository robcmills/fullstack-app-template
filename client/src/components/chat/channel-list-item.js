import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const ChannelListItem = ({
	activeChannelId,
	classes,
	channel,
}) =>
	<ListItem
		button
		classes={activeChannelId === String(channel.id)
			? { root: classes.active }
			: {}}
		component={Link}
		dense
		to={`/channels/${channel.id}`}
	>
		<ListItemText primary={channel.name} />
	</ListItem>

const styles = theme => ({
	active: {
		backgroundColor: theme.palette.primary.light,
		color: 'white',
	},
})

export default withStyles(styles)(ChannelListItem)
