import React from 'react'
import _ from 'lodash'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import { withStyles } from '@material-ui/core/styles'
import sweetConnect from '../../redux/sweet-connect'
import { closeLoginSnackbar } from '../../redux/action-creators'
import { loginErrorSelector } from '../../redux/selectors'

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

const LoginSnackbar = ({ classes, loginError }) =>
	<Snackbar
		anchorOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		autoHideDuration={5000}
		open={!!loginError}
		onClose={closeLoginSnackbar}
	>
		<SnackbarContent
			aria-describedby="register-snackbar"
			className={classes.error}
			message={
				<span id="register-snackbar" className={classes.message}>
					<ErrorIcon className={classes.icon} />
					Failed to login: {loginError}
				</span>
			}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					className={classes.close}
					onClick={closeLoginSnackbar}
				>
					<CloseIcon />
				</IconButton>,
			]}
		/>
	</Snackbar>

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			loginError: loginErrorSelector,
		},
	})
)(LoginSnackbar)
