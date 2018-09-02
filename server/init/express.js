const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const gzip = require('compression')
const helmet = require('helmet')
const { ENV } = require('../config/env')

module.exports = (app) => {
	app.set('port', (process.env.PORT || 3001))
	app.set('trust proxy', 'loopback')

	if (ENV === 'production') {
		app.use(gzip())
		app.use(helmet())
	}

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(methodOverride())
	app.use(cookieParser())
}
