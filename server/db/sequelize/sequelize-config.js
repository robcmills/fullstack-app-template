const { DB_TYPE } = require('../../config/env')
const { DB_TYPES } = require('../../config/db-types')

switch (DB_TYPE) {
case DB_TYPES.SQLITE:
	module.exports = require('../sqlite/sequelize-config')
	break
case DB_TYPES.POSTGRES:
	module.exports = require('../postgres/sequelize-config')
	break
default:
	throw new Error(`No sequelize config found for db type '${DB_TYPE}'`)
}
