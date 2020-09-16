var tower, towerImage
var door, doorImage, doorGroup;
var climbers, climbersImage, climbersGroup;
var ghost, ghostImage;
var invisibleBlock, invisibleBlockGroup;
var spookySound;
var gameState
var gameState = "play"
function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  ghostImage = loadImage("ghost-standing.png");
 
  climbersImage = loadImage("climber.png");
  spookySound = loadSound("spooky.wav");
}
function setup(){
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage(ghostImage);
  
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  doorGroup = new Group();
}
function draw(){
  background("grey")
  if(gameState==="play"){
    
  if(tower.y > 400){
    tower.y = 300
    
  }
  if(keyDown("enter")){
    ghost.velocityY = -5;
  }
    ghost.velocityY = ghost.velocityY+0.8;
  if(keyDown("left_arrow")){
    ghost.x = ghost.x-3;
  }
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+3;
  }
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y > 600){
    ghost.destroy();
  }
  }
  spawnDoors();
  drawSprites();
  
}
  if(gameState==="end"){
    text("Game Over",250,250);
  }
    
function spawnDoors(){
  if(frameCount%240===0){
    var door = createSprite(200,-50);
    door.addImage(doorImage);
    var climbers = createSprite(200,10);
    climbers.addImage(climbersImage);
                  
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climbers.width;
    invisibleBlock.height = 2;
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    climbers.x = door.x;
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 1;
    invisibleBlock.lifetime = 800;
    invisibleBlockGroup.add(invisibleBlock);
    climbers.velocityY = 1;
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
    
    climbers.lifetime = 800;
    door.lifetime = 800;
    doorGroup.add(door);
    climbersGroup.add(climbers)
  }
} 