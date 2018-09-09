import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const CreateButton = ({ classes }) =>
	<Button
		className={classes.createButton}
		color="primary"
		size="small"
		variant="outlined"
	>
		Create
	</Button>


const styles = theme => ({
	createButton: {
		backgroundColor: '#edeff8',
		border: `1px solid ${theme.palette.primary.light}`,
		minHeight: '29px', // matches height of message-input
		padding: 0,
	},
})

export default withStyles(styles)(CreateButton)
