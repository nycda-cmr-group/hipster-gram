const Sequelize = require('sequelize');
var sequelize;

if(process.env.DATABASE_URL) {
	Sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres'
	})
} else {
	sequelize = new Sequelize('postgres://postgres:P@s5w0rd@localhost/hipstergram');

}

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err)
	});

module.exports = sequelize;