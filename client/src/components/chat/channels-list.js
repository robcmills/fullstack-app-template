import React from 'react'
import _ from 'lodash'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ForumIcon from '@material-ui/icons/Forum'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import CreateChannelModal from './create-channel-modal'

import sweetConnect from '../../redux/sweet-connect'
import { channelsSelector } from '../../redux/selectors'
import { withStyles } from '@material-ui/core/styles'

class ChannelsList extends React.Component {
	state = { isCreateOpen: false, isExpanded: true }

	toggleExpanded = () => {
		this.setState(state => ({ isExpanded: !state.isExpanded }))
	}

	closeCreateChannelModal = () => {
		this.setState({ isCreateOpen: false })
	}

	openCreateChannelModal = () => {
		this.setState({ isCreateOpen: true })
	}

	render() {
		const { classes, channels } = this.props

		return (
			<div className={classes.channels}>
				<CreateChannelModal
					isOpen={this.state.isCreateOpen}
					handleClose={this.closeCreateChannelModal}
				/>
				<List component="nav">
					<ListItem
						button
						onClick={this.toggleExpanded}
						classes={{ root: classes.primaryColor }}
					>
						<ListItemIcon classes={{ root: classes.primaryColor }}>
							<ForumIcon />
						</ListItemIcon>
						<ListItemText primary="Channels" classes={{
							root: classes.listItemTextRoot,
							primary: classes.primaryColor }} />
						{this.state.isExpanded ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.isExpanded} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem
								button
								dense
								classes={{ root: classes.primaryLight }}
								onClick={this.openCreateChannelModal}
							>
								<AddIcon />
								<ListItemText primary="Create" classes={{ primary: classes.primaryLight }} />
							</ListItem>
							{channels.map((channel, index) =>
								<ListItem button dense key={index}>
									<ListItemText primary={channel.name} />
								</ListItem>
							)}
						</List>
					</Collapse>
				</List>
			</div>
		)
	}
}

const styles = theme => ({
	channels: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	primaryColor: {
		color: theme.palette.primary.main,
	},
	primaryLight: {
		color: theme.palette.primary.light,
	},
	listItemTextRoot: {
		padding: 0,
	},
})

export default _.flowRight(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channels: channelsSelector,
		},
	})
)(ChannelsList)
