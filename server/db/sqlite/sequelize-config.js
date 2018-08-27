module.exports = {
	development: {
		username: 'root',
		password: null,
		database: 'fullstack_app_dev',
		dialect: 'sqlite',
		storage: 'data/fullstack-app-dev.sqlite3'
	},
	test: {
		database: 'fullstack_app_test',
		dialect: 'sqlite',
		storage: 'data/fullstack-app-test.sqlite3'
	},
	production: {
		database: 'fullstack_app_prod',
		dialect: 'sqlite',
		host: process.env.RDS_HOSTNAME,
		password: process.env.RDS_PASSWORD,
		port: process.env.RDS_PORT,
		username: process.env.RDS_USERNAME
	}
}
