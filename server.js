var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('/map_example.html');
});

app.listen(80);

