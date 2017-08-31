//CB Note> this test file runs a create function that adds a new row of data to the
//   user table, then the post table.
//   purpose is to test that the DB model works properly

const db = require('./models');

db.user.create({
	email_username: 'person@yourmail.com',
	password: 'abc123'
}).then(function(){

    db.post.create({
    	image_loc: 'https://unsplash.com/?photo=kQzFr1JqSKM',
	    desc: 'lion king',
	    user_id: 1
    }).
    then(function(data){
    	console.log(data);
    },function(err){
    	console.log(err);
    })

})