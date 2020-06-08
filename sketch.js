var  thickness,wall, damage, height;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
speed = random(223, 321);
weight = random(30, 52);
thickness = random(22, 83);

bullet = createSprite(50, 200, 25, 10);
wall = createSprite(1200, 200, thickness, 400/2);
wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
bullet.velocityX = speed;



if(bullet.collide(wall)){
  bullet.velocityX = 0;
damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

if( damage<= 10){
  wall.shapeColor = color("green");
}else{
  wall.shapeColor = color("red");
}


}


  drawSprites();
}