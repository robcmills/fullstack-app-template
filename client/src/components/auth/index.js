import React from 'react'

import sweetConnect from '../../redux/sweet-connect'
import { isLoggedInSelector } from '../../redux/selectors'

const Auth = ({ isLoggedIn }) => isLoggedIn
	? <div>Logged in</div>
	: <div>Logged out</div>

export default sweetConnect({
	selectors: {
		isLoggedIn: isLoggedInSelector,
	},
})(Auth)
