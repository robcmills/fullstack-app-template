import { matchPath } from 'react-router-dom'

const isActiveSelector = (state, props) =>
	matchPath(window.location.pathname, { path: props.to })

export default isActiveSelector
