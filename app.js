const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'hbs');

app.use('/js', express.static(__dirname + '/js'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/istqb', function(req, res) {
    res.render('istqb');
});

app.listen(port);