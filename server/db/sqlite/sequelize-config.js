module.exports = {
	development: {
		username: 'root',
		password: null,
		database: 'fullstack-app-dev',
		dialect: 'sqlite',
		storage: 'data/fullstack-app-dev.sqlite3'
	},
	test: {
		dialect: 'sqlite',
		storage: 'data/fullstack-app-test.sqlite3'
	},
	production: {
		username: process.env.RDS_USERNAME,
		password: process.env.RDS_PASSWORD,
		database: 'fullstack-app-prod',
		port: process.env.RDS_PORT,
		host: process.env.RDS_HOSTNAME,
		dialect: 'postgres'
	}
}
