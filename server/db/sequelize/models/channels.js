module.exports = (sequelize, DataTypes) => {
	const Channel = sequelize.define('Channel', {
		name: {
			type: DataTypes.STRING,
			defaultValue: ''
		}
	}, {
		timestamps: false
	})

	return Channel
}
