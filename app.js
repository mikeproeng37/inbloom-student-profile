var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/content'));
app.engine('html', require('jade').__express);

app.get('/', function(req, res) {
	res.render('content/index.html');
});

app.listen(3000);
