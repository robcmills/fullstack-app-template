const initPassport = require('./passport')
const initSession = require('./session')
const initExpress = require('./express')
const initRoutes = require('./routes')
const initRender = require('./render')

module.exports = (app) => {
	initPassport()
	initSession(app)
	initExpress(app)
	initRoutes(app)
	initRender(app)
}
