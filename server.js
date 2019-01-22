const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname + '/')));


app.use('/api', api);

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});


const server = app.listen(3000, function () {
	console.log('server listening on %d', server.address().port);
});
