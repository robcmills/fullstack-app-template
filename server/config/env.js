const { DB_TYPES } = require('./db-types')

module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	DB_TYPE: process.env.DB_TYPE || DB_TYPES.POSTGRES,
	GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || null
}
