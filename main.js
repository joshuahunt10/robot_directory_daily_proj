const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');


const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.render('index', {data: data.users})
});

app.get('/:id', function(req, res){
  var id = req.params.id - 1;

  res.render('profile', {data:data.users[id]})

})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
