const { DB_TYPE } = require('../config/env')
const { DB_TYPES } = require('../config/db-types')

let dbConfig = null

/* use inline requires for conditional loading */
switch (DB_TYPE) {
case DB_TYPES.SQLITE:
	dbConfig = require('./sqlite')
	break
case DB_TYPES.POSTGRES:
	dbConfig = require('./postgres')
	break
default:
	throw new Error(`No database type '${DB_TYPE}' found`)
}

module.exports = dbConfig
