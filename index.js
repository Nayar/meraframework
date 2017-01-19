var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.static('bower_components'))
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/api', function (req, res) {
  res.send('Hello World!')
})

module.exports = app

