import React from 'react'
import { compose } from 'recompose'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from '../../../redux/sweet-connect'
import titleSelector from './title-selector'

const Title = ({ classes, title }) =>
	<Typography
		className={classes.flex}
		color="inherit"
		noWrap
		title={title}
		variant="title"
	>
		{title}
	</Typography>

const styles = theme => ({
	flex: {
		flexGrow: 1,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			title: titleSelector,
		},
	})
)(Title)
