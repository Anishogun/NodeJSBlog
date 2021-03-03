
///////////////////////////////////////////////////////////////////////
//////////////////         MODULES       /////////////////////////////
/////////////////       REQUIREMENTS    /////////////////////////////
////////////////////////////////////////////////////////////////////
'use strict';
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var sass = require('node-sass');
var fs = require('fs');

const route = require('./routes');
const db = require('./config/db')






///////////////////////////////////////////////////////////////////////
/////////////////          SETTINGS          /////////////////////////
/////////////////////////////////////////////////////////////////////

const app = express();
var hbs = exphbs.create({ extname: '.hbs' });

// Set static folders for accessing
app.use(express.static(path.join(__dirname, 'public')));

// For getting  POST request values in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Use morgan for logging.
app.use(morgan('combined'));

// Setting port for server
const port = process.env.PORT || 3300;






///////////////////////////////////////////////////////////////////////
/////////////////           MONGODB           ////////////////////////
/////////////////////////////////////////////////////////////////////
db.connect();





///////////////////////////////////////////////////////////////////////
////////////////       ROUTES MANAGEMENT      ////////////////////////
/////////////////////////////////////////////////////////////////////

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
console.log('to close the port when error, killall -9 node');
