import React from 'react'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'

const BubbleInput = ({ classes, ...props }) =>
	<Input
		classes={{
			root: classes.root,
			input: classes.input,
			focused: classes.focused,
		}}
		disableUnderline
		{...props}
	/>

const styles = theme => ({
	root: {
		background: theme.palette.background.paper,
		borderColor: theme.palette.divider,
		borderRadius: theme.shape.borderRadius,
		borderStyle: 'solid',
		borderWidth: '1px',
		height: theme.spacing.unit * 4,
	},
	focused: {
		borderColor: theme.palette.primary.main,
	},
	input: {
		padding: '5px',
	},
})

export default withStyles(styles)(BubbleInput)
