const initPassport = require('./passport')
const initSession = require('./session')
const initExpress = require('./express')
const initRoutes = require('./routes')

module.exports = (app) => {
	initPassport()
	initSession(app)
	initExpress(app)
	initRoutes(app)
}
