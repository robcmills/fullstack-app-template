const initPassport = require('./passport')
const initSession = require('./session')
const initExpress = require('./express')
const initRoutes = require('./routes')
const initRender = require('./render')

module.exports = (app) => {
	initPassport()
	initExpress(app)
	initSession(app)
	initRoutes(app)
	initRender(app)
}
