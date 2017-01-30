var express = require('express'),
	app = express(),
	port = 3060;

app.get('/', function (req, res) {
	res.send('Hello World!');
})

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
});