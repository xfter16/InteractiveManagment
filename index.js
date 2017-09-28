var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.end('<h1>main page</h1>');

});

app.get('/register', function(req, res){

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
