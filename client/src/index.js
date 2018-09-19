import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'

import store from './redux/store'
import theme from './theme'
import App from './components/app'

import './index.css'
import './service-worker'
import './socket-events'

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)