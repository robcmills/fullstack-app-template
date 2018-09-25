const { DB_TYPES } = require('./db-types')

module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	DB_TYPE: process.env.DB_TYPE || DB_TYPES.SQLITE,
	GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
	GOOGLE_SECRET: process.env.REACT_APP_GOOGLE_SECRET || process.env.GOOGLE_SECRET,
	GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
}
