var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')
var path = require('path')

var app = new express()
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// ///
// app.use(express.static())
app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/hello', function (req, res) {
  console.log('hello', req)
  res.render({scripts: ['bundle.js']})

// res.sendFile('views/canvas.js')
})

var port = 3000
app.listen(port, function () { console.log('listening on port ' + port); })
