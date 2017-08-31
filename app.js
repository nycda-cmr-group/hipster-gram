const express = require('express');
const app = express();
const db = require('./models');
require('dotenv').config();
const port = process.env.PORT || 8080;

// we must use middleware for that, this package does that for us
const parser = require('body-parser');
// CB Notes - > Validator won't be used initially
// const expressValidator = require('express-validator');

// lets get the body content from body urlencoded data (like formData) and json
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());


// CB Notes - > Validator won't be used initially
// app.use(expressValidator());

app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', function(req,res){
    console.log("congrats you're seeing the home page");
    res.send("If you get this message, that means the route is working")
})

const server = app.listen(port, () => {
    console.log(`started port ${port}`);

    // console.log to test db connection
    console.log(db.post);
});