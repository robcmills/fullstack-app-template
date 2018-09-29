import { compose, join, juxt, toUpper, head, tail } from 'ramda'

export default function capitalize (str) {
	return compose(
		join(''),
		juxt([compose(toUpper, head), tail])
	)(str)
}