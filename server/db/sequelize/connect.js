const { sequelize } = require('./models')

module.exports = () => {
	sequelize
		.authenticate()
		.then(() => {
			console.log('Successfully connected to sequelize database')
		}, (err) => {
			console.log('Unable to connect to the sequelize database: ', err)
		})
}
