import _ from 'lodash'

export default function mapStateToSelectors(propToSelectorMap) {
	return (state, props) => (
		_.mapValues(propToSelectorMap, selector => selector(state, props))
	)
}
