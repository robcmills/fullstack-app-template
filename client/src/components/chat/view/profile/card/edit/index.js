import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Card from 'components/shared/card'

const EditCard = ({ classes, user }) => {
	return (
		<Card className={classes.card}>
			Edit!
		</Card>
	)
}

const styles = theme => ({
	card: {
		alignItems: 'center',
		display: 'flex',
		flex: '0 0 auto',
		flexDirection: 'column',
		padding: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(EditCard)