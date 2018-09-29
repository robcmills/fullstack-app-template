import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import DisplayAvatar from '../display/avatar'

const EditAvatar = ({ alt, classes, src }) =>
	<div className={classes.edit}>
		<DisplayAvatar
			alt={alt}
			src={src}
		/>
		<TextField
			className={classes.avatar}
			fullWidth
			id="avatar"
			label="Avatar src"
			placeholder="undefined"
			value={src}
			InputLabelProps={{ shrink: true }}
		/>
	</div>

const styles = theme => ({
	edit: {
		display: 'flex',
	},
	avatar: {
		marginLeft: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditAvatar)