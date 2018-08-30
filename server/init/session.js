const session = require('express-session')
const passport = require('passport')
const db = require('../db')
const { ENV } = require('../config/env')

module.exports = (app) => {
	let sessionStore = db.session()

	const sess = {
		cookie: {
			httpOnly: true,
			secure: false
		},
		proxy: true,
		resave: false,
		saveUninitialized: false,
		secret: process.env.SESSION_SECRET || 'session_secret',
		store: sessionStore
	}

	if (ENV === 'production') {
		console.log('Note: In order for authentication to work in production you will need a secure HTTPS connection')
		sess.cookie.secure = true
	}

	app.use(session(sess))
	app.use(passport.initialize())
	app.use(passport.session())
}
