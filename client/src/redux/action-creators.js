import asyncAction from './async-action'

export const register = payload => {
	asyncAction({
		body: payload,
		method: 'POST',
		type: 'REGISTER',
		url: '/api/register',
	})
}
