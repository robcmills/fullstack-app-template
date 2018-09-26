import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const DirectMessage = ({
	classes,
	message: { content, Sender: { name, picture, username } },
}) =>
	<div className={classes.wrapper}>
		{picture ?
			<Avatar alt={username || name} src={picture} /> :
			<AccountCircle color="secondary" className={classes.avatar} />
		}
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
