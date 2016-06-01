module.exports = function sendFT (file) {
  var fs = require('fs')
  var dgram = require('dgram')
  var imagemagick = require('imagemagick-native')

  var port = 1337
  var host = 'ft.noise'
  // var file = process.argv[2]

  var srcData = fs.readFileSync(file)

  var content = imagemagick.convert({
    srcData: srcData,
    width: 45,
    height: 35,
    format: 'ppm'
  })

  var message = new Buffer(content) // + offset)

  var client = dgram.createSocket('udp4').bind(host + ':' + port)

  client.send(message, 0, message.length, port, host, function (err, bytes) {
    if (err) throw err
    console.log('UDP message sent to ' + host + ':' + port)
    client.close()
  })
}
