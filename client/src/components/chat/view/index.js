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
		<div className={classes.toolbar} />
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
		height: '100vh',
		overflow: 'hidden',
		'flex-direction': 'column',
	},
	toolbar: theme.mixins.toolbar,
	children: {
		display: 'flex',
		flex: '1 1 auto',
		'flex-direction': 'column',
	},
})

export default withStyles(styles)(View)
