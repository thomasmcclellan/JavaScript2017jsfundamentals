const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function() {
	console.log('Listening on 3000');
})
