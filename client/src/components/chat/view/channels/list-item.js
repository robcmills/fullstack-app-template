import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import { withStyles } from '@material-ui/core/styles'

const ChannelsListItem = ({ channel, classes }) =>
	<ListItem
		button
		className={classes.item}
		component={Link}
		to={`/chat/channels/${channel.id}`}
	>
		<ListItemText
			primary={channel.name}
			primaryTypographyProps={{ noWrap: true }}
			title={channel.name}
		/>
		<IconButton>
			<MoreIcon />
		</IconButton>
	</ListItem>

const styles = theme => ({
	item: {
		padding: `0 ${theme.spacing.unit}px 0 ${theme.spacing.unit * 2}px`,
	},
})

export default withStyles(styles)(ChannelsListItem)
