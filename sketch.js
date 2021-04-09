var fixedRect, movingRect;
var rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(300,100,100,100);
  rect1.shapeColor = "green";
  rect1.debug = true;

  rect2 = createSprite(300,300,100,100);
  rect2.shapeColor = "green";
  rect2.debug = true;

  rect3 = createSprite(300,500,100,100);
  rect3.shapeColor = "green";
  rect3.debug = true;
}

  




function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if (isTouching(rect3,movingRect)){

      movingRect.shapeColor = "red";
      rect3.shapeColor = "red";
    
  }
  else {

    movingRect.shapeColor = "pink";
    rect3.shapeColor = "pink";
    
  }

 
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      
     return true;
  }
  else {
    
      return false;
  } 


}