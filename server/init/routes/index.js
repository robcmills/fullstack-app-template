const initChannelRoutes = require('./channel-routes')
const initChannelMessageRoutes = require('./channel-message-routes')
const initUserRoutes = require('./user-routes')

module.exports = (app) => {
	initChannelRoutes(app)
	initChannelMessageRoutes(app)
	initUserRoutes(app)
}
