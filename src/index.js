'use strict';
var path = require('path');
var express = require("express");
var exphbs  = require('express-handlebars');
var morgan = require("morgan");
var sass = require('node-sass');
var fs = require('fs');

const app = express();
var hbs = exphbs.create({extname: ".hbs"});

// Set static folders for accessing 
app.use(express.static(path.join(__dirname,'public')));

// For getting  POST request values in request body
app.use(express.urlencoded( {extended: true }));
app.use(express.json());

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Setting port for server
const port = process.env.PORT || 3000;

// Use morgan for logging.
app.use(morgan('combined'));

app.get('/',(req, res)=>{
    res.render('Pages/home');
});

app.get('/search',(req, res)=>{
    // if(req.query.q == "home"){
        // fs.writeFile('req.txt', req.query.q  , ["utf-8"],()=>{
        //     console.log("req has been saved!");
        // });
        // res.render('Pages/home');
    // }
    res.render('Pages/news');
});

app.post('/search',(req, res)=>{
    console.log(req.body.k);
    res.render('Pages/news');
});

app.get('/home',(req, res)=>{
    // console.log(req.query);
    res.render('Pages/home');
});

app.listen(port, ()=>{console.log( `Example app listening at http://localhost:${port}`)});
console.log("to close the port, killall -9 node");
