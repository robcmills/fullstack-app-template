import { matchPath } from 'react-router-dom'
import { createSelector } from 'reselect'

import {
	channelsByIdSelector,
	pathnameSelector,
} from '../../../redux/selectors'

const titleSelector = createSelector(
	channelsByIdSelector,
	pathnameSelector,
	(channelsById, pathname) => {
		if (matchPath(pathname, { path: '/chat/channels', exact: true })) {
			return 'Channels'
		}
		const match = matchPath(pathname, { path: '/chat/channels/:id' })
		if (!match) {
			return 'Chat'
		}
		const channelId = match.params.id
		const channel = channelsById[channelId]
		if (channelId && !channel) {
			return ''
		}
		return channel.name
	}
)

export default titleSelector
