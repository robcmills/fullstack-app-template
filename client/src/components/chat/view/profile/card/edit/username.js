import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const EditUsername = ({ classes, value }) =>
	<div className={classes.edit}>
		<TextField
			fullWidth
			id="username"
			label="Username"
			placeholder="undefined"
			value={value}
			InputLabelProps={{ shrink: true }}
		/>
	</div>

const styles = theme => ({
	edit: {
		marginTop: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditUsername)