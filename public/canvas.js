var p5 = require('p5')
var colorPicker = require('./color_picker.js')

module.exports = new p5(function () {
  this.setup = function setup () {
    this.createCanvas(700, 400)
    this.background(205)

    this.loadImage('/uploads/uploaded_image', function (img) {
      image(img, 0, 0)
    })
    this.updatePixels()
  }
  // function draw(){
  this.clearCanvas = function redraw () {
    this.background('black')
  }

  // }
  /*
  this.draw = function draw () {

    this.image(img, 0, 0)
    this.image(img, 0, 200, 200, 200)
  } */

  this.mouseDragged = function mouseDragged () {
    var rgb = colorPicker.getRGB()
    this.stroke(rgb.r, rgb.g, rgb.b)
    this.strokeWeight(10)
    this.line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY)
  }

/* this.mouseClicked = function mouseClicked () { //this function will register but will not draw
   // var rgb = colorPicker.getRGB()
   this.stroke(255, 0, 0)
   this.strokeWeight(10)
   this.point(p5.mouseX, p5.mouseY)
 } */
})
