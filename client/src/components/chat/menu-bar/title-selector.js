import { matchPath } from 'react-router-dom'
import { createSelector } from 'reselect'

import {
	channelsByIdSelector,
	pathnameSelector,
	usersByIdSelector,
} from 'redux/selectors'

const getChannelsTitle = ({ channelsById, pathname }) => {
	if (matchPath(pathname, { path: '/chat/channels', exact: true })) {
		return 'Channels'
	}
	const match = matchPath(pathname, { path: '/chat/channels/:id' })
	if (!match) {
		return ''
	}
	const channelId = match.params.id
	const channel = channelsById[channelId]
	if (channelId && !channel) {
		return ''
	}
	return '#' + channel.name
}

const getUsersTitle = ({ usersById, pathname }) => {
	if (matchPath(pathname, { path: '/chat/users', exact: true })) {
		return 'Users'
	}
	const match = matchPath(pathname, { path: '/chat/users/:id' })
	if (!match) {
		return ''
	}
	const userId = match.params.id
	const user = usersById[userId]
	if (userId && !user) {
		return ''
	}
	const title = user.username || user.profile.name
	const isProfile = !!matchPath(pathname, { path: '/chat/users/:id/profile' })
	if (isProfile) {
		return title
	}
	return '@' + title
}

const titleSelector = createSelector(
	channelsByIdSelector,
	usersByIdSelector,
	pathnameSelector,
	(channelsById, usersById, pathname) => {
		if (matchPath(pathname, { path: '/chat/channels' })) {
			return getChannelsTitle({ channelsById, pathname })
		}
		if (matchPath(pathname, { path: '/chat/users' })) {
			return getUsersTitle({ usersById, pathname })
		}
		return 'Chat'
	}
)

export default titleSelector
