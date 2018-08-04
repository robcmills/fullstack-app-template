const passport = require('passport')
const { Models } = require('../models')

const User = Models.User

module.exports.all = (req, res) => {
	User.findAll().then((users) => {
		res.json(users)
	}).catch((err) => {
		console.log(err)
		res.status(500).send('Error in first query')
	})
}

module.exports.authenticate = (req, res, next) => {
	return req.user
		? res.status(200).json(req.user)
		: res.sendStatus(401)
}

module.exports.login = (req, res, next) => {
	// Do email and password validation for the server
	passport.authenticate('local', (authErr, user, info) => {
		if (authErr) return next(authErr)
		if (!user) {
			return res.sendStatus(401)
		}
		// Passport exposes a login() function on req (also aliased as
		// logIn()) that can be used to establish a login session
		return req.logIn(user, (loginErr) => {
			if (loginErr) return res.sendStatus(401)
			return res.status(200).json(user)
		})
	})(req, res, next)
}

module.exports.logout = (req, res) => {
	req.logout()
	res.sendStatus(200)
}

module.exports.register = (req, res, next) => {
	User.findOne({ where: { username: req.body.username } }).then((existingUser) => {
		if (existingUser) {
			return res.sendStatus(409)
		}

		const user = User.build({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		})

		return user.save().then(() => {
			req.logIn(user, (err) => {
				if (err) return res.sendStatus(401)
				return res.status(200).json(user)
			})
		})
	}).catch(err =>
		next(err)
	)
}
