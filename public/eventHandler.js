window.onload = function () {
  var easel = require('./canvas.js')
  // var connect = require('./sendFT.js')
  var clearButton = document.getElementById('clear')
  var sendButton = document.getElementById('send')
  var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

  clearButton.onclick = function () {
    easel.clearCanvas()
  }
  sendButton.onclick = function () {
    var can = document.getElementById('defaultCanvas0')
    can.toBlob(function (blob) {
      var xhr = new XMLHttpRequest()
      xhr.open('post', 'http://localhost:3000/upload/binary/jpeg', true)
      xhr.setRequestHeader('Content-type', 'image/jpeg')
      xhr.send(blob)

      console.log(blob)
    })
  }
}
