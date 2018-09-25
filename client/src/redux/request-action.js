import store from './store'

export default function requestAction({ body, method, payload, type, url }) {
	store.dispatch({ type: `${type}_REQUEST`, payload })
	return fetch(url, {
		method,
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'include', // include, same-origin, *omit
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(body), // body data type must match 'Content-Type' header
	}).then(response => {
		console.log('response', response)
		if (response.ok) {
			return response.json()
		}
		throw new Error('Request failed: ' + response.statusText)
	}).then(json => {
		store.dispatch({
			type: `${type}_SUCCESS`,
			payload: { ...payload, response: json },
		})
		return json
	}, error => {
		store.dispatch({
			type: `${type}_FAILURE`,
			payload: { ...payload, error },
		})
		return error
	})
}
