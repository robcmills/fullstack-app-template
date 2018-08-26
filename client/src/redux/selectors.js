import _ from 'lodash'
import { createSelector } from 'reselect'

export const channelsSelector = state => state.channels
export const createChannelErrorSelector = state => state.createChannelError
export const isAuthenticatingSelector = state => state.isAuthenticating
export const isCreatingChannelSelector = state => state.isCreatingChannel
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
	(channels) => _.keyBy(channels, 'id')
)
export const usersByIdSelector = createSelector(
	usersSelector,
	(users) => _.keyBy(users, 'id')
)
