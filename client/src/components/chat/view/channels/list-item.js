import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const ChannelsListItem = ({ channel, classes }) =>
	<ListItem
		button
		component={Link}
		to={`/chat/channels/${channel.id}`}
	>
		<ListItemText
			primary={channel.name}
			primaryTypographyProps={{ noWrap: true }}
			title={channel.name}
		/>
	</ListItem>

const styles = theme => ({
	channel: {
		alignItems: 'center',
		display: 'flex',
		padding: theme.spacing.unit,
	},
})

export default withStyles(styles)(ChannelsListItem)
