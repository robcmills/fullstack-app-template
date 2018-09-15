import { createSelector } from 'reselect'

import {
	messagesByRecipientUserIdSelector,
	userSelector,
} from 'redux/selectors'
import { isEqualIds } from 'utils'

const userMessagesSelector = createSelector(
	messagesByRecipientUserIdSelector,
	userSelector,
	(state, props) => props.userId,
	(messagesByRecipientUserId, me, userId) => {
		const sent = (messagesByRecipientUserId[userId] || [])
			.filter(message => isEqualIds(message.senderUserId, me.id))
		const received = (messagesByRecipientUserId[me.id] || [])
			.filter(message => isEqualIds(message.senderUserId, userId))
		return sent.concat(received)
			.sort((a, b) => {
				if (a.createdAt < b.createdAt) {
					return 1
				}
				if (a.createdAt > b.createdAt) {
					return -1
				}
				return 0
			})
	}
)

export default userMessagesSelector
