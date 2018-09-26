import React from 'react'
import Button from '@material-ui/core/Button'

// TODO: Figure out why /api/google-login does not proxy to localhost:3001
// from the Create React App dev server (localhost:3000)
// For now this is a manual workaround
const url = process.env.NODE_ENV === 'development'
	? 'http://localhost:3001/api/google-login'
	: '/api/google-login'

const LOGO_SIZE = 22

const GoogleLogin = () =>
	<Button
		href={url}
		size="large"
		variant="outlined"
	>
		<img
			alt="Google Logo"
			height={LOGO_SIZE}
			src="/images/google.png"
			width={LOGO_SIZE}
		/>
		&nbsp;&nbsp;
		Login with Google
	</Button>

export default GoogleLogin