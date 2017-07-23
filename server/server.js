//MEAN pattern
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;
//routes
var bgb = require('./routes/bgb');

var app = express();

//View engine
//

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'src')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

  app.use('/api', bgb);
  app.listen(port, function(){
    console.log("port "+port)
  }
  );



