import { createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'

export default createMuiTheme({
	palette: {
		primary: {
			light: teal[50],
			main: teal[800],
		},
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
})