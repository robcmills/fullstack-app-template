import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import mapStateToSelectors from './map-state-to-selectors'

// Wrapper for syntactic *sugar
export default function sweetConnect({ selectors, actions }) {
	return connect(
		selectors ?
			mapStateToSelectors(selectors) :
			null,
		actions ?
			_.partial(bindActionCreators, actions) :
			null
	)
}
