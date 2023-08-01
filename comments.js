// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); // set static path
app.set('view engine', 'ejs'); // set view engine
app.set('views', './views'); // set views path

// create server
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

// create socket
io.on('connection', function(socket) {
    console.log('co nguoi ket noi ' + socket.id);

    // user send a comment
    socket.on('CLIENT_SEND_COMMENT', function(data) {
        console.log(data);
        io.sockets.emit('SERVER_SEND_COMMENT', data);
    });

    // user send a comment
    socket.on('CLIENT_SEND_COMMENT_REPLY', function(data) {
        console.log(data);
        io.sockets.emit('SERVER_SEND_COMMENT_REPLY', data);
    });

    // user send a comment
    socket.on('CLIENT_SEND_COMMENT_REPLY_REPLY', function(data) {
        console.log(data);
        io.sockets.emit('SERVER_SEND_COMMENT_REPLY_REPLY', data);
    });
});

// render home page
app.get('/', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});

// render home page
app.get('/home', function(req, res) {
    res.render('home');
});