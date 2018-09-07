import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ForumIcon from '@material-ui/icons/Forum'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'

const links = [{
	icon: <ForumIcon />,
	text: "Channels",
	to: "/chat/channels",
},{
	icon: <AccountCircleIcon />,
	text: "Users",
	to: "/chat/users",
}]

const Navigation = ({ classes }) => links.map(({ icon, text, to }) =>
	<Link to={to} key={to}>
		<ListItem
			button
			classes={{ root: classes.primaryColor }}
		>
			<ListItemIcon classes={{ root: classes.primaryColor }}>
				{icon}
			</ListItemIcon>
			<ListItemText primary={text} classes={{
				root: classes.listItemTextRoot,
				primary: classes.primaryColor }} />
		</ListItem>
	</Link>
)

const styles = theme => ({
	primaryColor: {
		color: theme.palette.primary.main,
	},
	listItemTextRoot: {
		padding: 0,
	},
})

export default withStyles(styles)(Navigation)
