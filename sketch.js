

var sleep,brush,bath,gym,bg,eat,drink,move1;
var astronaut;
function preload(){
sleep=loadAnimation("sleep.png");
brush=loadAnimation("brush.png");
eat=loadAnimation("eat1.png","eat2.png");
bath=loadAnimation("bath1.png","bath2.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
bg=loadImage("iss.png");
drink=loadAnimation("drink1.png","drink2.png");
move1=loadAnimation("move.png","move1.png");
}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(200, 200);
  
}

function draw() {
  background(255,255,255);  
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.scale=0.1
    
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gyming",gym);
    astronaut.scale=0.1;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.scale=0.1
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bath);
    astronaut.scale=0.1
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move1);
    astronaut.scale=0.1
  }
  if(keyDown("s")){
  
    astronaut.addAnimation("sleeping",sleep);
    astronaut.scale=0.1
  }
  drawSprites();
}