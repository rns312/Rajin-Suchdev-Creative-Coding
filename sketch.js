
var x = 0; // GLOBAL VARIABLE
var y = 0; // GLOBAL VARIABLE
var r, g, b; // GLOBAL VARIABLE
var q, w, e; // GLOBAL VARIABLE


function setup() {
  createCanvas(1920, 1080);
  background(255);
  r = random(255);
  g = random(255);
  b = random(255);
  q = random(255);
  w = random(255);
  e = random(255);
  x = random(width);
  y = random(height);
  
}

function draw() {
  rect(x, y, 50, 50);
  stroke(q, w, e,255);
  fill (r, g, b, 127);
  // brownian motion - drunk behavior
  var dx = mouseX-x;
  var dy = mouseY-y;
  x = x + random(0, 0.2)*dx + random(-10, 10);
  y = y + random(0, 0.2)*dy + random(-10, 10);
  if(x>width) x = 0;
  if(y>height) y = 0;
  if(x<0) x=width;
  if(y<0) y=height;
}

function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
    q = random(255);
    w = random(255);
    e = random(255);
}


function keyPressed()
{
  background(255);
  x = random(width);
  y = random(height);
}
