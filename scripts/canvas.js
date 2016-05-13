var p5 = require('p5')
var colorPicker = require('./color_picker.js')

new p5(function () {
  // console.log(this)

  this.setup = function setup () {
    // var img = p5.loadImage('assets/test.jpg')
    this.createCanvas(700, 400)
    // this.frameRate(30)
    this.background(205)
    // this.set(0, 0, img)
    this.updatePixels()
  }
  // function draw(){

  // }

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
