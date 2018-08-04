import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import sweetConnect from '../../redux/sweet-connect'
import { isLoggedInSelector } from '../../redux/selectors'

const PrivateRoute = ({ isLoggedIn, ...props }) => isLoggedIn
	? <Route {...props} />
	: <Redirect to="/login" />

export default sweetConnect({
	selectors: {
		isLoggedIn: isLoggedInSelector,
	},
})(PrivateRoute)
