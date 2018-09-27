import React from 'react'
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const Card = ({ children, classes, className }) =>
	<div className={cn(classes.card, className)}>{children}</div>

const styles = theme => ({
	card: {
		background: theme.palette.common.white,
		border: `1px solid ${theme.palette.divider}`,
	},
})

export default withStyles(styles)(Card)