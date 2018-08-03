const session = require('express-session')
const SQLiteStore = require('connect-sqlite3')(session)

module.exports = () => new SQLiteStore()
