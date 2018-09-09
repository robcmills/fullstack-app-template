import React, { Component } from 'react'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from 'redux/sweet-connect'
import { toggleDrawer } from 'redux/action-creators'
import { isDrawerOpenSelector } from 'redux/selectors'
import isActiveSelector from './is-active-selector'

class NavLink extends Component {
	handleClick = () => {
		const { isDrawerOpen } = this.props
		if (isDrawerOpen) {
			toggleDrawer()
		}
	}

	render() {
		const { classes, icon, isActive, text, to } = this.props
		return (
			<ListItem
				button
				classes={{
					root: cn(classes.primaryColor, isActive && classes.active),
				}}
				component={Link}
				key={to}
				onClick={this.handleClick}
				to={to}
			>
				<ListItemIcon classes={{ root: classes.primaryColor }}>
					{icon}
				</ListItemIcon>
				<ListItemText
					classes={{
						root: classes.textRoot,
						primary: classes.primaryColor,
					}}
					primary={text}
					primaryTypographyProps={{ noWrap: true }}
				/>
			</ListItem>
		)
	}
}

const styles = theme => ({
	active: {
		backgroundColor: '#eceef8',
	},
	primaryColor: {
		color: theme.palette.primary.main,
	},
	textRoot: {
		padding: 0,
	},
})

export default compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			isActive: isActiveSelector,
			isDrawerOpen: isDrawerOpenSelector,
		}
	}),
)(NavLink)
