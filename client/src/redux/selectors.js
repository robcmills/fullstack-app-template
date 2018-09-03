import { indexBy, prop } from 'ramda'
import { createSelector } from 'reselect'

export const channelsSelector = state => state.channels
export const createChannelErrorSelector = state => state.createChannelError
export const isCreatingChannelSelector = state => state.isCreatingChannel
export const isDrawerOpenSelector = state => state.isDrawerOpen
export const isFetchingMessagesSelector = state => state.isFetchingMessages
export const isLoggedInSelector = state => !!state.user
export const isLoggingInSelector = state => state.isLoggingIn
export const isRegisteringSelector = state => state.isRegistering
export const loginErrorSelector = state => state.loginError
export const messagesByChannelIdSelector = state => state.messagesByChannelId
export const registerErrorSelector = state => state.registerError
export const userSelector = state => state.user
export const usersSelector = state => state.users

export const channelsByIdSelector = createSelector(
	channelsSelector,
	(channels) => indexBy(prop('id'), channels)
)
export const usersByIdSelector = createSelector(
	usersSelector,
	(users) => indexBy(prop('id'), users)
)
