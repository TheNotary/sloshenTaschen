window.onload = function () {
  var easel = require('./canvas.js')
  var connect = require('./sendFT.js')
  var clearButton = document.getElementById('clear')
  var sendButton = document.getElementById('send')

  clearButton.onclick = function () {
    easel.clearCanvas()
  }
  sendButton.onclick = function () {
    connect.sendFT(easel.sendCanvas())
  }
}
