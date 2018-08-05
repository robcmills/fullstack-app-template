import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { withStyles } from '@material-ui/core/styles'

class UsersList extends React.Component {
	state = { open: true }

	handleClick = () => {
		this.setState(state => ({ open: !state.open }))
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.users}>
				<List component="nav">
					<ListItem button onClick={this.handleClick}>
						<ListItemIcon>
							<AccountCircle />
						</ListItemIcon>
						<ListItemText inset primary="Users" />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText inset primary="Starred" />
							</ListItem>
						</List>
					</Collapse>
				</List>
			</div>
		)
	}
}

const styles = theme => ({
	users: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
})

export default withStyles(styles)(UsersList)