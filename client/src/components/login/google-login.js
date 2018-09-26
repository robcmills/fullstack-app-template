import React from 'react'
import Button from '@material-ui/core/Button'

const LOGO_SIZE = 22

const GoogleLogin = () =>
	<Button
		href="/api/google-login"
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