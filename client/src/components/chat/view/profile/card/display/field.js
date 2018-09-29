import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Bold from 'components/shared/bold'

const Field = ({ classes, name, value }) =>
	<Typography className={classes.field} noWrap>
		<Bold>{name}:</Bold>&nbsp;{value || 'undefined'}
	</Typography>

const styles = theme => ({
	field: {
		marginTop: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(Field)