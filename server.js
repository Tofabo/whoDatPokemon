var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 8000;

app.use(express.static(path.join(__dirname, './client/views/static')));
app.use(bodyParser.urlencoded ( { extended: true } ));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./Server/Config/mongoose.js')
require('./Server/Config/routes.js')(app);

app.listen(port, function(){ console.log("Listening on port " + port + "!")});
