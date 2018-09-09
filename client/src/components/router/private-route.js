import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

import sweetConnect from 'redux/sweet-connect'
import { isLoggedInSelector } from 'redux/selectors'

const PrivateRoute = ({ isLoggedIn, ...props }) => {
	return isLoggedIn
		? <Route {...props} />
		: <Redirect to="/login" />
}

export default withRouter(sweetConnect({
	selectors: {
		isLoggedIn: isLoggedInSelector,
	},
})(PrivateRoute))
