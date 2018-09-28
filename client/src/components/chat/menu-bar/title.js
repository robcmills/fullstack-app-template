import React from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from 'redux/sweet-connect'
import titleSelector from './title-selector'

const Title = ({ classes, title }) =>
	<Typography
		className={classes.title}
		color="inherit"
		noWrap
		title={title}
		variant="title"
	>
		{title}
	</Typography>

const styles = theme => ({
	title: {
		flexGrow: 1,
		paddingLeft: theme.spacing.unit,
	},
})

export default compose(
	withRouter,
	withStyles(styles),
	sweetConnect({
		selectors: {
			title: titleSelector,
		},
	})
)(Title)
