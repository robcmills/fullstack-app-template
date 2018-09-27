import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const UsersListItem = ({ user, classes }) =>
	<ListItem
		button
		className={classes.item}
		component={Link}
		to={`/chat/users/${user.id}/profile`}
	>
		{user.profile.picture ?
			<Avatar
				alt={user.username || user.profile.name}
				src={user.profile.picture}
			/> :
			<AccountCircle color="secondary" className={classes.accountCircle} />
		}
		<ListItemText
			primary={user.username || user.profile.name}
			primaryTypographyProps={{ noWrap: true }}
			title={user.username || user.profile.name}
		/>
	</ListItem>

const styles = theme => ({
	item: {
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	},
	accountCircle: {
		height: 40,
		width: 40,
	},
})

export default withStyles(styles)(UsersListItem)
