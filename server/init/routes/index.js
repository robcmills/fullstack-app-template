const initChannelRoutes = require('./channel-routes')
const initMessageRoutes = require('./message-routes')
const initUserRoutes = require('./user-routes')

module.exports = (app) => {
	initChannelRoutes(app)
	initMessageRoutes(app)
	initUserRoutes(app)
}
