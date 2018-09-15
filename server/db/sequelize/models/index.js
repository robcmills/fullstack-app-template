const Sequelize = require('sequelize')

const sequelizeConfig = require('../sequelize-config')
const { ENV } = require('../../../config/env')
const config = sequelizeConfig[ENV]

const channelMessageModel = require('./channel-messages')
const channelModel = require('./channels')
const directMessageModel = require('./direct-messages')
const tokenModel = require('./tokens')
const userModel = require('./users')

const Models = {}
const dbUrl = process.env[config.use_env_variable]

const sequelize = dbUrl
	? new Sequelize(dbUrl)
	: new Sequelize(config.database, config.username, config.password, config)

Models.DirectMessage = sequelize.import('DirectMessage', directMessageModel)
Models.Channel = sequelize.import('Channel', channelModel)
Models.ChannelMessage = sequelize.import('ChannelMessage', channelMessageModel)
Models.Token = sequelize.import('Token', tokenModel)
Models.User = sequelize.import('User', userModel)

Object.keys(Models).forEach((key) => {
	const model = Models[key]
	if (model.associate) {
		model.associate(Models)
	}
})

module.exports = { Models, sequelize }
