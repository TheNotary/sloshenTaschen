var p5 = require('p5')
var colorPicker = require('./color_picker.js')

var myP5 = function (easel) {
  easel.setup = function setup () {
    easel.createCanvas(700, 400)
    easel.background('black')
    easel.loadImage('/uploads/uploaded_image', function (img) {
      easel.image(img, 0, 0)
    })

    easel.updatePixels()
  }

  easel.clearCanvas = function redraw () {
    easel.background('black')
  }

  /*easel.sendCanvas = function () {
    var can = easel.toDataURL()
    fs.write('/assets', can)
  }*/

  easel.mouseDragged = function mouseDragged () {
    var rgb = colorPicker.getRGB()
    easel.stroke(rgb.r, rgb.g, rgb.b)
    easel.strokeWeight(10)
    easel.line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY)
  }

/* this.mouseClicked = function mouseClicked () { //this function will register but will not draw
 // var rgb = colorPicker.getRGB()
 this.stroke(255, 0, 0)
 this.strokeWeight(10)
 this.point(p5.mouseX, p5.mouseY)
 } */
}
module.exports = new p5(myP5, 'container')
