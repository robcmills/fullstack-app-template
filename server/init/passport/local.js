const LocalStrategy = require('passport-local').Strategy
const db = require('../../db')

module.exports = (passport) => {
	if (!db.passport || !db.passport.local || !typeof db.passport.local === 'function') {
		console.warn('Unsupported passport-local')
		return
	}

	passport.use(new LocalStrategy(db.passport.local))
}
