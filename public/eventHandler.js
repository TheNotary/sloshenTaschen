window.onload = function () {
  var easel = require('./canvas.js')
  var clearButton = document.getElementById('clear')

  clearButton.onclick = function () {
    easel.coolThing()
    // canvas.background('yellow')

    document.body.style.backgroundColor = 'red'
    console.log('two')
  }
  console.log('one')
}
