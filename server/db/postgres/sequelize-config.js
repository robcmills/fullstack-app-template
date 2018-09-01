module.exports = {
	development: {
		database: 'fullstack_app_dev',
		dialect: 'postgres',
		host: 'db',
		password: 'example',
		username: process.env.PGUSER || 'postgres'
	},
	test: {
		database: 'fullstack_app_test',
		dialect: 'postgres',
		host: '127.0.0.1',
		password: null,
		username: process.env.PGUSER || 'postgres'
	},
	production: {
		database: 'fullstack_app_prod',
		dialect: 'postgres',
		host: '127.0.0.1',
		password: null,
		use_env_variable: 'POSTGRES_DB_URL',
		username: process.env.PGUSER || 'postgres'
	}
}
