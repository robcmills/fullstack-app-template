import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

import sweetConnect from '../../redux/sweet-connect'
import { isAuthenticatingSelector, isLoggedInSelector } from '../../redux/selectors'

const PrivateRoute = ({ isAuthenticating, isLoggedIn, ...props }) => {
	// On initial render isAuthenticating is undefined
	if (isAuthenticating !== false) {
		return null
	}
	return isLoggedIn
		? <Route {...props} />
		: <Redirect to="/login" />
}

export default withRouter(sweetConnect({
	selectors: {
		isAuthenticating: isAuthenticatingSelector,
		isLoggedIn: isLoggedInSelector,
	},
})(PrivateRoute))
