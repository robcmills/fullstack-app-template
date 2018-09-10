import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const UsersListItem = ({ user, classes }) =>
	<ListItem
		button
		className={classes.item}
		component={Link}
		to={`/chat/users/${user.id}`}
	>
		<ListItemText
			primary={user.username}
			primaryTypographyProps={{ noWrap: true }}
			title={user.username}
		/>
	</ListItem>

const styles = theme => ({
	item: {
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	},
})

export default withStyles(styles)(UsersListItem)
