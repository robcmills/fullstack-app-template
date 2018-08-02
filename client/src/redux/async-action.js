import store from './store'

export default function asyncAction({ body, method, type, url }) {
	store.dispatch({ type: `${type}_REQUEST`, payload: body })
	fetch(url, {
		method,
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(body), // body data type must match 'Content-Type' header
	}).then(response =>
		response.json(),
	).then(json =>
		store.dispatch({ type: `${type}_SUCCESS`, payload: JSON.parse(json) })
	).catch(error =>
		store.dispatch({ type: `${type}_FAILURE`, payload: error })
	)
}