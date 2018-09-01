const session = require('express-session')
const pg = require('pg')
const connectPostgres = require('connect-pg-simple')

const { db } = require('../sequelize/constants')

const PGStore = connectPostgres(session)

module.exports = () => new PGStore({ pg, conString: db })
