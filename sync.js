// requiers db model to run db sync
const db = require('./models');

['comments','user','post'].forEach(function(model) {
	db[model].sync({alter: true})
})

