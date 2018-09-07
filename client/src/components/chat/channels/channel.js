import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const Channel = ({ channel, classes }) =>
	<Link className={classes.channel} to={`/channels/${channel.id}`}>
		{channel.name}
	</Link>

const styles = theme => ({
	channel: {
		padding: theme.spacing.unit,
	},
})

export default withStyles(styles)(Channel)
