import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const UserMessage = ({
	classes,
	message,
}) =>
	<div className={classes.wrapper}>
		<Paper elevation={0} classes={{ root: classes.message }}>
			<Typography>
				<span className={classes.username}>
					{message.Sender.username}:&nbsp;
				</span>
				{message.content}
			</Typography>
		</Paper>
	</div>

const styles = theme => ({
	message: {
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

export default withStyles(styles)(UserMessage)
