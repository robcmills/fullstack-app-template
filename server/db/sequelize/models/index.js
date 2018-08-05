const Sequelize = require('sequelize')
const sequelizeConfig = require('../sequelize-config')
const { ENV } = require('../../../config/env')
const tokenModel = require('./tokens')
const userModel = require('./users')
const channelModel = require('./channels')

const config = sequelizeConfig[ENV]

const Models = {}
const dbUrl = process.env[config.use_env_variable]

const sequelize = dbUrl
	? new Sequelize(dbUrl)
	: new Sequelize(config.database, config.username, config.password, config)

Models.Token = sequelize.import('Token', tokenModel)
Models.User = sequelize.import('User', userModel)
Models.Channel = sequelize.import('Channel', channelModel)

Object.keys(Models).forEach((key) => {
	const model = Models[key]
	if (model.associate) {
		model.associate(Models)
	}
})

module.exports = { Models, sequelize }
