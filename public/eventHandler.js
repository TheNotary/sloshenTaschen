window.onload = function () {
  var easel = require('./canvas.js')
  var connect = require('./sendFT.js')
  var clearButton = document.getElementById('clear')
  var sendButton = document.getElementById('send')
  exports.module = var fs = require('fs')

  clearButton.onclick = function () {
    easel.clearCanvas()
  }
  sendButton.onclick = function () {
    var can = document.getElementById('defaultCanvas0')
    var img = can.toDataURL()

    fs.writeFile('ftImage.jpg', img)
  }
}
