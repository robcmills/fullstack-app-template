const { Models } = require('../models')

const User = Models.User

module.exports = (username, password, done) =>
	User.findOne({ where: { username } }).then((user) => {
		if (!user) {
			return done(
				null,
				false,
				{ message: `There is no record of the username ${username}.` }
			)
		}
		return user.comparePassword(password).then(
			(result) => {
				if (result) {
					done(null, user)
				} else {
					done(
						null,
						false,
						{ message: 'Incorrect username or password.' }
					)
				}
			}
		)
	}).catch((err) => {
		console.log(err)
		done(
			null,
			false,
			{ message: `Authentication failed. ${err.toString()}` }
		)
	})
