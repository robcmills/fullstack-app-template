import { map } from 'ramda'

export default function mapStateToSelectors(propToSelectorMap) {
	return (state, props) =>
		map(selector => selector(state, props), propToSelectorMap)
}
