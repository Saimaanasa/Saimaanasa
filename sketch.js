 var Runner;
  var path,invisibleGround,pathImage
function preload(){
  //pre-load images

  pathImg=loadImage("path.png");

  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  Runner_running=createSprite(200,200);
  Runner_running.addAnimation("Runner-1.png","Runner-2.png");
  Runner_running.velocityY = 0;
  Runner_running .scale = 0.1;

invisibleGround=createSprite(10,200,10,400);
invisibleGround.visible=true;

invisibleGround=createSprite(390,200,10,400);
invisibleGround.visible=true;

}

function draw() {
  background("black");
 
  

  if(path.y > 400){
    path.y = height/2;
    }

    if(keyIsDown(LEFT_ARROW)){
      Runner=LEFT;
    }

    if(keyIsDown(RIGHT_ARROW)){
      Runner=RIGHT;

      

    }
    drawSprites();
  }
