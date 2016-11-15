var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


//MongoDB
var db = mongoose.connect('mongodb://localhost/bookAPI');
mongoose.Promise = global.Promise;

//Models
var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers
var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function (req, res) {
    res.send('Welcome to my NodeJs REST API!')
});

app.listen(port, function () {
    console.log("API running on port : " + port);
});

module.exports = app;