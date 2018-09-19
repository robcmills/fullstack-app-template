import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
	palette: {
		primary: {
			main: '#00695f', // dark teal
		},
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
})