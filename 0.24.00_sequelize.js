// Sequelize is a promise-based ORM for Node.js and io.js
// It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, MSSQL, and features solid transaction support, relations, read replications and more

var Sequelize = require('sequelize');
var sequelize = new Sequelize('databse', 'username', 'password');

var User = sequelize.define('user', {
	username: Sequelize.STRING,
	birthday: Sequelize.DATE
});

sequelize.sync().then(function(){
	return User.create({
		username: 'janedoe',
		birthday: new Date(1980, 6, 20)
	});
}).then(function(jane){
	console.log(jane.get({
		plain: true
	}));
});


//Go here: https://sequelize.readthedocs.io/en/v3/ for more.