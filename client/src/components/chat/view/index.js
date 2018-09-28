import React from 'react'
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Channels from './channels'
import Channel from './channel'
import Users from './users'
import User from './user'
import Profile from './profile'

const View = ({ classes }) =>
	<div className={classes.view}>
		<div className={classes.children}>
			<Route path="/chat/channels" exact component={Channels} />
			<Route path="/chat/channels/:channel_id" component={Channel} />
			<Route path="/chat/users" exact component={Users} />
			<Route path="/chat/users/:user_id" exact component={User} />
			<Route path="/chat/users/:user_id/profile" exact component={Profile} />
		</div>
	</div>

const styles = theme => ({
	view: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		height: '100%',
		overflow: 'hidden',
		width: '100%',
	},
	children: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
})

export default withStyles(styles)(View)
