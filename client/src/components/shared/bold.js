import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Bold = ({ children, classes }) =>
	<span className={classes.bold}>{children}</span>

const styles = {
	bold: {
		fontWeight: 'bold',
	},
}

export default withStyles(styles)(Bold)