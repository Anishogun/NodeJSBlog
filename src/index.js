'use strict';
var path = require('path');
var express = require("express");
var exphbs  = require('express-handlebars');
var morgan = require("morgan");
var sass = require('node-sass');

const app = express();
var hbs = exphbs.create({extname: ".hbs"});

// Set static folders for accessing 
app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Setting port for server
const port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.get('/',(req, res)=>{
    res.render('home');
});

app.listen(port, ()=>{console.log( `Example app listening at http://localhost:${port}`)});
console.log("to close the port, killall -9 node");
