module.exports = (sequelize, DataTypes) => {
	const Token = sequelize.define('Token', {
		kind: {
			type: DataTypes.STRING,
			allowNull: false
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: false
		},
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Users',
				key: 'id'
			}
		}
	}, {
		timestamps: false
	})

	// Class Methods
	Token.associate = function (models) {
		Token.belongsTo(models.User, {
			foreignKey: 'userId'
		})
	}

	return Token
}
