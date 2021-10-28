var bg;
var score = 0; 
var laser ;
var asteroid;
var AlienSpaceship;
var playerSpaceship;



function preload(){
  bg = loadImage("backGround.png")
  earthsSpaceship = loadImage("earths-spaceship-better.png");
  asteroidImg = loadImage ("asteroid.png")
AlienSpaceshipImg = loadImage("Alien-spaceship.png");
laserImg = loadImage("laser.png");
  
}

function setup() {
 // background("red")
  createCanvas(1000,500);
  playerSpaceship = createSprite(70, 200, 50, 50);
  playerSpaceship.addImage(earthsSpaceship)
  playerSpaceship.scale = 0.5;

}





function draw() {
  background(bg);
    

if(keyDown("DOWN_ARROW")){
  playerSpaceship.y = playerSpaceship.y+10
}

if(keyDown("UP_ARROW")){
  playerSpaceship.y = playerSpaceship.y-10
}
if(keyDown("space")& frameCount % 15 === 0 ){
  createLasers();
}

//if(laser.isTouching(astroid)){
  // asteroids.destroyEach
   //laser.destroyEach
   //score = score+1
//}

 spawnAstroids()
 spawnAlien()

drawSprites();
}

function spawnAstroids(){
if(frameCount % 60 === 0){
  asteroid = createSprite(1000,random(10,480));
  asteroid.addImage(asteroidImg)
  asteroid.scale = 0.3
  asteroid.velocityX = -6 
}
}

function createLasers(){
  laser = createSprite(70,200,50,50)
  laser.addImage(laserImg)
  laser.y = playerSpaceship.y;
  laser.velocityX = 6
  //laser.liftime = 100
  laser.scale = 0.3  
}

function spawnAlien(){
  if(frameCount % 90 === 0){
    alien = createSprite(1000,random(10,480));
  alien.addImage(AlienSpaceshipImg);
  alien.scale = 0.1
  alien.velocityX = -4
  }
  

}