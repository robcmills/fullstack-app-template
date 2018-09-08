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
		background: theme.palette.grey['50'],
		display: 'flex',
		flex: '0 0 50px',
		'align-items': 'center',
	},
})

export default withStyles(styles)(ActionBar)
