import React from 'react'
import { compose } from 'recompose'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import { withStyles } from '@material-ui/core/styles'

import { closeRegisterSnackbar } from '../../redux/action-creators'
import sweetConnect from '../../redux/sweet-connect'
import { registerErrorSelector } from '../../redux/selectors'

const styles = theme => ({
	error: {
		background: theme.palette.error.dark,
		margin: theme.spacing.unit,
	},
	message: {
		alignItems: 'center',
		display: 'flex',
	},
	icon: {
		fontSize: 20,
		marginRight: theme.spacing.unit,
	},
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4,
	},
});

const RegisterSnackbar = ({ classes, registerError }) =>
	<Snackbar
		anchorOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		autoHideDuration={5000}
		open={!!registerError}
		onClose={closeRegisterSnackbar}
	>
		<SnackbarContent
			aria-describedby="register-snackbar"
			className={classes.error}
			message={
				<span id="register-snackbar" className={classes.message}>
					<ErrorIcon className={classes.icon} />
					Failed to register
				</span>
			}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					className={classes.close}
					onClick={closeRegisterSnackbar}
				>
					<CloseIcon />
				</IconButton>,
			]}
		/>
	</Snackbar>

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			registerError: registerErrorSelector,
		},
	})
)(RegisterSnackbar)
