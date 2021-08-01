varship,ship_sail;
var seaImage;
function preload(){

seaImg=loadImage("sea.png");
shipImg=loadAnimation=("ship-1.png","ship-2.png","ship-1.png");

shipImg=loadAnimation=("ship-3.png","ship-4.png","ship-3.png");
}

function setup(){
  createCanvas(400,400);
 
ship=createSprite(50,160,20,50);
ship.addAnimation("sailling",ship_sailling);

  spriteName.addImage(ship_sailling)

if(sea.x < 0)
sea.x .width/2;
}

function draw() {
  background("blue");
 
  ship.velocityx=-2
  ship.velocityx=2

console.log(ship_sailling);


}