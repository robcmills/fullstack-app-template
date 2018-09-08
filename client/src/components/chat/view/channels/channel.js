import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const Channel = ({ channel, classes }) =>
	<div className={classes.channel}>
		<Link to={`/chat/channels/${channel.id}`}>
			{channel.name}
		</Link>
	</div>

const styles = theme => ({
	channel: {
		alignItems: 'center',
		display: 'flex',
		padding: theme.spacing.unit,
	},
})

export default withStyles(styles)(Channel)
