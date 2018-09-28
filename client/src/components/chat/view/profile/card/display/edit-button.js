import React from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import { withStyles } from '@material-ui/core/styles'

const EditButton = ({ classes, onClick }) =>
	<Button
		className={classes.editButton}
		color="secondary"
		onClick={onClick}
		size="small"
		variant="outlined"
	>
		<EditIcon className={classes.editIcon} />&nbsp;Edit
	</Button>

const styles = theme => ({
	editButton: {
		marginTop: theme.spacing.unit * 2,
	},
	editIcon: {
		height: theme.spacing.unit * 2,
		width: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditButton)
