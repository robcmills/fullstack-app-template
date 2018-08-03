const deserializeUser = require('./deserialize-user')
const google = require('./google')
const local = require('./local')

module.exports = {
	deserializeUser,
	google,
	local
}
