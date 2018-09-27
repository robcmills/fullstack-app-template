import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Spacer = ({ classes }) => <div className={classes.spacer} />

const styles = theme => ({
	spacer: {
		height: theme.spacing.unit,
	},
})

export default withStyles(styles)(Spacer)