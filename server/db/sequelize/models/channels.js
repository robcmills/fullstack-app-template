module.exports = (sequelize, DataTypes) => {
	const Channel = sequelize.define('Channel', {
		name: {
			type: DataTypes.STRING,
			defaultValue: ''
		}
	}, {
		timestamps: false
	})

	// Class Methods
	Channel.associate = function (models) {
		Channel.belongsToMany(models.ChannelMessage, {
			foreignKey: 'channelId',
			through: 'channel_messages'
		})
		Channel.belongsToMany(models.User, {
			foreignKey: 'channelId',
			through: 'channel_members'
		})
	}

	return Channel
}
