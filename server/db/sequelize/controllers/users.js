const sequelize = require('sequelize')
const { ne } = sequelize.Op
const passport = require('passport')
const { Models } = require('../models')
const asyncHandler = require('./async-handler')

const User = Models.User

module.exports.getById = asyncHandler(async (req, res) =>
	res.json(await User.findById(req.params.user_id, {
		attributes: ['id', 'name', 'picture', 'username']
	}))
)

module.exports.getMessages = asyncHandler(async (req, res) =>
	res.json([])
)

module.exports.all = asyncHandler(async (req, res) =>
	res.json(await User.findAll({
		where: { id: { [ne]: req.user.id } }
	}))
)

module.exports.authenticate = (req, res) => req.user
	? res.status(200).json(req.user)
	: res.sendStatus(401)

module.exports.googleLogin = passport.authenticate('google', {
	scope: ['profile', 'email']
})

module.exports.googleCallback = (req, res, next) => {
	passport.authenticate('google', {
		failureRedirect: '/login'
	}, (authError, user, info) => {
		console.log('googleCallback', authError, user, info)
		if (authError) {
			return res.redirect('/login')
		}
		return req.logIn(user, (loginError) => {
			if (loginError) {
				return res.redirect('/login')
			}
			return res.redirect('/')
		})
	})(req, res, next)
}

module.exports.login = (req, res, next) => {
	passport.authenticate('local', (authErr, user, info) => {
		if (authErr) return next(authErr)
		if (!user) {
			return res.sendStatus(401)
		}
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

module.exports.register = asyncHandler(async (req, res) => {
	const existingUser = await User.findOne({
		where: { username: req.body.username }
	})
	if (existingUser) {
		return res.sendStatus(409)
	}

	const newUser = await User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	})

	req.logIn(newUser, (err) => {
		if (err) return res.sendStatus(401)
		return res.status(200).json(newUser)
	})
})
