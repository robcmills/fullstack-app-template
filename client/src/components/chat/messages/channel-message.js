import React from 'react'
import _ from 'lodash'
import { withProps } from 'recompose'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import sweetConnect from '../../../redux/sweet-connect'
import { usersByIdSelector } from '../../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

const ChannelMessage = ({
	classes,
	content,
	username,
}) =>
	<div className={classes.wrapper}>
		<Paper elevation={0} classes={{ root: classes.message }}>
			<Typography>
				<span className={classes.username}>
					{username}:&nbsp;
				</span>
				{content}
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

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			usersById: usersByIdSelector,
		},
	}),
	withProps(({ usersById, message }) => {
		return {
			content: message.content,
			username: usersById[message.userId].username,
		}
	})
)(ChannelMessage)
