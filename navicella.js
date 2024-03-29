function Navicella() {
  this.x = width / 2;
  this.xdir = 0;

  this.show = function() {
    fill(240, 240, 240);
    rect(this.x, height - 20, 20, 20);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir * 5;
  }

}