var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')
var path = require('path')
var fs = require('fs')
var app = new express()
var send = require('./sendFT.js') // this might also be the problem

var fileDest = ''
var fileName = ''
/*
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
xhr.open('GET', '//upload/binary/jpeg', 'true')
   
  }
  console.log(xhr.readyState)
}*/

var storage = multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, fileDest)
    },
    filename: function (req, file, cb) {
      cb(null, fileName)
    }
}) })
// was var uploading

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // /try false

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.post('/', uploading.single('upload'), function (req, res) {
  res.end(res.render('index'))
})
app.post('/upload/binary/jpeg', function (req, res) {
  console.log('t')
  // fs.writeFile('./public/picture.png', res.sendFile())
  // res.sendFile(path.join(__dirname, '//public/shiiit.jpg'))
  res.download(req)
  res.end()
}) // ////use middleware and process the posted image
/*
app.get('/', function (req, res) {
    
})

--------
app.post('/', uploading.single('sendImage'), function (req, res) {
  send.sendFT('./brocoli.jpeg')
  console.log(uploading.single('sendImage'))
  res.end()
})*/

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.get('/', function (req, res) {
  res.render('index')
})

var port = 3000
app.listen(port, function () { console.log('listening on port ' + port) })
