import React from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import { withStyles } from '@material-ui/core/styles'

const EditButton = ({ classes }) =>
	<Button
		className={classes.editButton}
		color="secondary"
		size="small"
		variant="outlined"
	>
		<EditIcon className={classes.editIcon} />&nbsp;Edit
	</Button>

const styles = theme => ({
	editButton: {
		marginTop: theme.spacing.unit * 3,
	},
	editIcon: {
		height: theme.spacing.unit * 2,
		width: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditButton)
