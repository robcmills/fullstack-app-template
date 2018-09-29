import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const EditField = ({ classes, error, name, onChange, value }) =>
	<div className={classes.edit}>
		<TextField
			error={!!error}
			fullWidth
			id={name}
			label={error ? error : name}
			onChange={onChange}
			placeholder="undefined"
			value={value || ''}
			InputLabelProps={{ shrink: true }}
		/>
	</div>

const styles = theme => ({
	edit: {
		marginTop: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditField)