var express = require('express');
var cool = require('cool-ascii-faces');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.end('hello world!');

});
app.get('/cool', function(req, res){
	res.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
