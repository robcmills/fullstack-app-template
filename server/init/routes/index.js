const userRoutes = require('./user-routes')
const channelRoutes = require('./channel-routes')

module.exports = (app) => {
	channelRoutes(app)
	userRoutes(app)
}
