var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.end('<div id="container"></div>'
  	+'<script src="https://unpkg.com/react@15/dist/react.js"></script>'
  	+'<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>'
	+'<script src="bundle.js"></script>'
  	);

});

app.get('/register', function(req, res){
	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
