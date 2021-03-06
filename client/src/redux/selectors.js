import { values } from 'ramda'
import { createSelector } from 'reselect'
import isEqualIds from 'utils/is-equal-ids'

export const channelsSelector = state => values(state.channelsById)
export const channelsByIdSelector = state => state.channelsById
export const createChannelErrorSelector = state => state.createChannelError
export const isCreatingChannelSelector = state => state.isCreatingChannel
export const isDrawerOpenSelector = state => state.isDrawerOpen
export const isFetchingChannelSelector = state => state.isFetchingChannel
export const isFetchingChannelsSelector = state => state.isFetchingChannels
export const isFetchingChannelMessagesSelector = state => state.isFetchingChannelMessages
export const isFetchingDirectMessagesSelector = state => state.isFetchingDirectMessages
export const isFetchingUsersSelector = state => state.isFetchingUsers
export const isFetchingUserSelector = state => state.isFetchingUser
export const isLoggedInSelector = state => !!state.user
export const isLoggingInSelector = state => state.isLoggingIn
export const isRegisteringSelector = state => state.isRegistering
export const loginErrorSelector = state => state.loginError
export const messagesByChannelIdSelector = state => state.messagesByChannelId
export const messagesByRecipientUserIdSelector = state => state.messagesByRecipientUserId
export const pathnameSelector = () => window.location.pathname
export const registerErrorSelector = state => state.registerError
export const usersByIdSelector = state => state.usersById
export const userIdFromPropsSelector = (state, { userId }) => userId
export const userSelector = state => state.user

export const usersSelector = createSelector(usersByIdSelector, values)

export const userByIdSelector = createSelector(
	userIdFromPropsSelector,
	userSelector,
	usersByIdSelector,
	(userId, me, usersById) => isEqualIds(userId, me.id) ? me : usersById[userId]
)
