import { matchPath } from 'react-router-dom'
import { createSelector } from 'reselect'
import isEqualIds from 'utils/is-equal-ids'

import {
	channelsByIdSelector,
	pathnameSelector,
	userSelector,
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

const getUsersTitle = ({ me, usersById, pathname }) => {
	if (matchPath(pathname, { path: '/chat/users', exact: true })) {
		return 'Users'
	}
	const match = matchPath(pathname, { path: '/chat/users/:id' })
	if (!match) {
		return ''
	}
	const userId = match.params.id
	const user = isEqualIds(userId, me.id) ? me : usersById[userId]
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
	userSelector,
	pathnameSelector,
	(channelsById, usersById, me, pathname) => {
		if (matchPath(pathname, { path: '/chat/channels' })) {
			return getChannelsTitle({ channelsById, pathname })
		}
		if (matchPath(pathname, { path: '/chat/users' })) {
			return getUsersTitle({ me, usersById, pathname })
		}
		return 'Chat'
	}
)

export default titleSelector
