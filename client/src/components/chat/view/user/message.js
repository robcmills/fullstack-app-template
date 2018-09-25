import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const DirectMessage = ({
	classes,
	message: { content, Sender: { name, picture, username } },
}) =>
	<div className={classes.wrapper}>
		{picture && <Avatar alt={username || name} src={picture} />}
		<Paper elevation={0} classes={{ root: classes.message }}>
			<Typography>
				<span className={classes.username}>
					{username || name}:&nbsp;
				</span>
				{content}
			</Typography>
		</Paper>
	</div>

const styles = theme => ({
	message: {
		marginLeft: theme.spacing.unit,
		padding: 8,
	},
	username: {
		fontWeight: 'bold',
	},
	wrapper: {
		display: 'flex',
		marginBottom: 8,
	},
})

export default withStyles(styles)(DirectMessage)
