import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import UserAvatar from 'components/shared/user-avatar'
import getLocaleString from 'utils/get-locale-string'

const DirectMessage = ({
	classes,
	message: { createdAt, content, Sender: { id, name, picture, username } },
}) =>
	<div className={classes.wrapper}>
		<UserAvatar alt={username || name} src={picture} userId={id} />
		<Paper elevation={0} classes={{ root: classes.message }}>
			<Typography className={classes.date} variant="caption">
				{createdAt && getLocaleString(createdAt)}
			</Typography>
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
		padding: '2px 8px',
	},
	date: {
		color: theme.palette.grey[500],
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
