const { ENV } = require('../../config/env')
const sequelizeConfig = require('./sequelize-config')

const config = sequelizeConfig[ENV]

module.exports.db = process.env[config.use_env_variable] ||
	`${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}`
