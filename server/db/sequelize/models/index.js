const Sequelize = require('sequelize')
const sequelizeConfig = require('../sequelize-config')
const { ENV } = require('../../../config/env')
const tokenModel = require('./tokens')
const userModel = require('./users')

const config = sequelizeConfig[ENV]

const db = {}
const dbUrl = process.env[config.use_env_variable]

const sequelize = dbUrl
	? new Sequelize(dbUrl)
	: new Sequelize(config.database, config.username, config.password, config)

db.Token = sequelize.import('Token', tokenModel)
db.User = sequelize.import('User', userModel)

Object.keys(db).forEach((key) => {
	const model = db[key]
	if (model.associate) {
		model.associate(db)
	}
})

module.exports = { Models: db, sequelize }
