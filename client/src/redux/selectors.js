import _ from 'lodash'
import { createSelector } from 'reselect'

export const allUsersSelector = state => state.users
export const channelsSelector = state => state.channels
export const createChannelErrorSelector = state => state.createChannelError
export const isCreatingChannelSelector = state => state.isCreatingChannel
export const isAuthenticatingSelector = state => state.isAuthenticating
export const isLoggedInSelector = state => !!state.user
export const isLoggingInSelector = state => state.isLoggingIn
export const isRegisteringSelector = state => state.isRegistering
export const loginErrorSelector = state => state.loginError
export const registerErrorSelector = state => state.registerError
export const userSelector = state => state.user

export const channelsByIdSelector = createSelector(
	channelsSelector,
	(channels) => _.keyBy(channels, 'id')
)
