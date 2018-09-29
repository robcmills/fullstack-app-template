import React from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'

const EditActions = ({ classes, handleCancel, isSubmitDisabled }) =>
	<div className={classes.actions}>
		<Button
			classes={{ focusVisible: classes.outlinedFocus }}
			color="secondary"
			onClick={handleCancel}
			size="small"
			variant="outlined"
		>
			<CloseIcon className={classes.icon} />&nbsp;Cancel
		</Button>
		<Button
			classes={{ focusVisible: classes.containedFocus }}
			color="secondary"
			className={classes.save}
			disabled={isSubmitDisabled}
			size="small"
			variant="contained"
		>
			Save
		</Button>
	</div>

const styles = theme => ({
	actions: {
		marginTop: theme.spacing.unit * 4,
	},
	outlinedFocus: {
		background: theme.palette.primary.light,
	},
	containedFocus: {
		boxShadow: 'none',
		background: theme.palette.primary.dark,
	},
	icon: {
		display: 'flex',
		height: theme.spacing.unit * 2,
		width: theme.spacing.unit * 2,
	},
	save: {
		boxShadow: 'none',
		marginLeft: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditActions)