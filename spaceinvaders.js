var navicella;
var alieni = [];
var spari = [];

function setup() {
  createCanvas(590, 400);
  navicella = new Navicella();
  for (var i = 0; i < 18; i++) {
    alieni[i] = new Alieno(i * 25 + 25, 60);
  }
}

function draw() {
  background(51);
  navicella.show();
  navicella.move();
  for (var i = 0; i < spari.length; i++) {
    spari[i].show();
    spari[i].move();
    for (var j = 0; j < alieni.length; j++) {
      if (spari[i].colpisce(alieni[j])) {
        alieni[j].consuma();
        spari[i].rimuovi();
        console.log("BOOM!!!!1111")
      }
    }
  }

  var bordo = false;

  for (var i = 0; i < alieni.length; i++) {
    alieni[i].show();
    alieni[i].move();

    if (alieni[i].x > width || alieni[i].x < 0) {
      bordo = true;
    }
  }

  if (bordo) {
    for (var i = 0; i < alieni.length; i++) {
      alieni[i].vaiGiu();
    }
  }

  for (var i = spari.length - 1; i >= 0; i--) {
    if (spari[i].daRimuovere) {
      spari.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (keyCode != UP_ARROW) {
    navicella.setDir(0);
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    var sparo = new Sparo(navicella.x + 10, height);
    spari.push(sparo);
  }

  if (keyCode == RIGHT_ARROW) {
    navicella.setDir(0.35);
  } else if (keyCode == LEFT_ARROW) {
    navicella.setDir(-0.35);
  }
}