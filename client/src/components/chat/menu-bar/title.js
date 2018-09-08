import React from 'react'
import { compose } from 'recompose'
import { matchPath, withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import sweetConnect from '../../../redux/sweet-connect'
import { channelsByIdSelector } from '../../../redux/selectors'

const getTitle = ({ channelsById, pathname }) => {
	if (matchPath(pathname, { path: '/chat/channels', exact: true })) {
		return 'Channels'
	}
	const match = matchPath(pathname, { path: '/chat/channels/:id' })
	if (!match) {
		return 'Chat'
	}
	const channelId = match.params.id
	if (channelId && !channelsById[channelId]) {
		return ''
	}
	return channelsById[channelId].name
}

const Title = ({ channelsById, classes, location: { pathname } }) => {
	const title = getTitle({ channelsById, pathname })
	return (
		<Typography
			className={classes.flex}
			color="inherit"
			noWrap
			title={title}
			variant="title"
		>
			{title}
		</Typography>
	)
}

const styles = theme => ({
	flex: {
		flexGrow: 1,
	},
})

export default withRouter(compose(
	withStyles(styles),
	sweetConnect({
		selectors: {
			channelsById: channelsByIdSelector,
		},
	})
)(Title))
