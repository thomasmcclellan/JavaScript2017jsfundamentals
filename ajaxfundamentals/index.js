const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/about', function(req, res) {
	res.send("HelloWorld!");
})

http.listen(3000, function() {
	console.log("Listening on port 3000");
})