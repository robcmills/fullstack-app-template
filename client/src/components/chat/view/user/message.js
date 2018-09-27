import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import UserAvatar from 'components/shared/user-avatar'

const DirectMessage = ({
	classes,
	message: { content, Sender: { id, name, picture, username } },
}) =>
	<div className={classes.wrapper}>
		<UserAvatar alt={username || name} src={picture} userId={id} />
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
	avatar: {
		height: 40,
		width: 40,
	},
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
