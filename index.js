var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')
var path = require('path')
var fs = require('fs')
var app = new express()
var send = require('./sendFT.js') // this might also be the problem
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, 'uploaded_image')
  }
})

/*
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
xhr.open('GET', '//upload/binary/jpeg', 'true')
   
  }
  console.log(xhr.readyState)
}*/

var uploading = multer({ storage: storage })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // /try false
// app.use(multer({ dest: './uploads' }))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(uploading.single('upload'))
app.post('/', uploading.single('upload'), function (req, res) {
  res.end(res.render('index'))
})
app.post('/upload/binary/jpeg', function (req, res) {
  console.log('what is this')
  res.sendFile(path.join(__dirname, '/public/shiiit.jpg'))
  res.end()
})
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
