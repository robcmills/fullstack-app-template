import React from 'react'
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Channels from './channels'
import Channel from './channel'

const View = ({ classes }) =>
	<div className={classes.view}>
		<div className={classes.toolbar} />
		<div className={classes.children}>
			<Route path="/chat/channels" component={Channels} exact />
			<Route path="/chat/channels/:channel_id" component={Channel} />
		</div>
	</div>

const styles = theme => ({
	view: {
		display: 'flex',
		flex: '1 1 auto',
		height: '100vh',
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
