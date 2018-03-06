var express = require('express');
var app = express();
var googsRows = require('./businessData').businessDataMapper;
var getGoogs = require('./businessData').getGoogs;
var googsWriter = require('./formData');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var secret = require('./secret.json');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.get('/', function (req, res) {
  var rows = googsRows;


  res.render('index', {
    bizData: rows
  });s
})

app.get('/form', function(req, res){
  res.render('form');
})

app.get('/data', function (req, res){

});

app.post('/form', function(req, res){
  console.log('writing to googs');
  console.log(req.body.data.sourcingStrat);
  console.log(req.body.data.eventName);
  console.log(req.body.data.repLaunch);
  googsWriter();
  res.redirect('/');
});
 
console.log('listening on 3000')
app.listen(3000)