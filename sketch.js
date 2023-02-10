var PLAY=1,END=0;
var bgImg, bg;
var pipeupImg, pipe1;
var pipedownImg, pipe2;
var birdImg, bird;
var score;
var gameState=PLAY;
var restartImg, restart;

function preload(){

 birdImg=loadImage("bird.png");
 bgImg=loadImage("bg.png");
 pipeupImg=loadImage("pipeUp.png");
 pipedownImg=loadImage("pipeDown.png")
 restart=loadImage("restart.png");
 
}

function setup() {

createCanvas(600,600);
bg=createSprite(300,300);
bg.addImage(bgImg);

bird=createSprite(20,256);
bird.scale=0.5;
bird.addImage(birdImg);

pipe1group=new Group();
pipe2group=new Group();

restart.createSprite(300,300);
restart.addImage(restart);
restart.scale=0.5
restart.visible=false
}

function draw() {
if(gameState===PLAY){
    pipe_move();
}
if(keyDown("space")){
    bird.y=bird.y -20
}
if(bird.isTouching(pipe1group)|| bird.isTouching(pipe2group)){
    gameState=END;
}
if(frameCount%100===0){
    score++;
}
if(gameState===END){
    bird.visible=false;
    restart.visible=true;
    pipe1.setVelocityXEach(0);
    pipe2.setVelocityXEach(0);
    pipe1.setLifeTime(-1);
    pipe1.setLifeTime(-1);
}
if(mousePressedOver(restart)){
    reset();

}
drawSprites();
textSize(50);
text("score"+score,575,500);

}

function pipe_move(){
if(frameCount%50===0){
    pipe1 = createSprite(150,0);
    pipe1.addImage(pipeupImg);
    pipe1.y = random(0,50);
    pipe1.velocityX = -2;
    pipe1Group.add(pipe1);
    pipe1Group.setLifetimeEach(144);
    
    pipe2 = createSprite(200,600);
    pipe2.addImage(pipedownImg);
    pipe2.y = random(462,512);
    pipe2.velocityX = -2;
    pipe2Group.add(pipe2);
    pipe2Group.setLifetimeEach(100);
 }

}
function reset(){
    gameState=PLAY;
    pipe1Group.destroyEach();
    pipe2Group.destroyEach();
    score = 0;
    bird.visible=true;
    restart.visible=false
  }