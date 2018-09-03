module.exports = {
	development: {
		database: 'fullstack_app_dev',
		dialect: 'sqlite',
		logging: false,
		password: null,
		storage: 'data/fullstack-app-dev.sqlite3',
		username: 'root'
	},
	test: {
		database: 'fullstack_app_test',
		dialect: 'sqlite',
		storage: 'data/fullstack-app-test.sqlite3'
	},
	production: {
		database: 'fullstack_app_prod',
		dialect: 'sqlite',
		password: process.env.RDS_PASSWORD,
		storage: 'data/fullstack-app-prod.sqlite3',
		username: process.env.RDS_USERNAME
	}
}
