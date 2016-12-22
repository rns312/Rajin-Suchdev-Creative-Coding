var shipImage;
var idle;
var drive;
var MARGIN = 40;

function preload()
{
bg = loadImage ("assets/track2.png");
shipImage = loadImage("data/car2.png");
idle = loadSound("data/idle.mp3");
drive = loadSound("data/accel.mp3");

}


function setup() { 
createCanvas(800,800);
bg.loadPixels();
idle.loop();


ship = createSprite(140, 120);
ship.maxSpeed = 5;
ship.friction = .94;
ship.rotation = 90;



ship.addImage("normal", shipImage);

asteroids = new Group();
bullets = new Group();

for(var i = 0; i<8; i++) {
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  }
}

function draw() {
 
  background(255);
  
  image(bg, 0, 0, width, height);
  
  textAlign(CENTER);
  text("Controls: w,a,s,d", width/2, 20);
  
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }
  
  if(keyDown("a"))
    ship.rotation -= 4;
  if(keyDown("d"))
    ship.rotation += 4;
  if(keyDown("w"))
    {
    ship.addSpeed(.3, ship.rotation);
    //drive.play();
    }
  if(!keyDown("w"))
    {
     drive.stop();
    }
  if(keyDown("s"))
    {
    ship.addSpeed(-.3, ship.rotation);
    }

  drawSprites();
  
  var sx = ship.position.x;
  var sy = ship.position.y;
  var vx = ship.velocity.x;
  var vy = ship.velocity.y;
  var c = bg.get(sx, sy)[0];
  console.log(c);
  if(c>0) // we're on a wall
  {
       ship.setVelocity(vx*-1, vy*-1);

  }
  
 }





