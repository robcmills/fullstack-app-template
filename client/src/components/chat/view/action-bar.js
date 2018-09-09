import React from 'react'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

const ActionBar = ({ children, classes }) => [
	<div className={classes.actionBar} key="actions">
		{children}
	</div>,
	<Divider key="divider" />
]

const styles = theme => ({
	actionBar: {
		alignItems: 'center',
		background: theme.palette.grey['50'],
		display: 'flex',
		flex: '0 0 47px', // matches height of navigation items in drawer
	},
})

export default withStyles(styles)(ActionBar)
