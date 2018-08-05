module.exports = {
	up (queryInterface, DataTypes) {
		return queryInterface.createTable('Channels', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING
			}
		})
	},

	down (queryInterface) {
		return queryInterface.dropTable('Channels')
	}
}
