var balloon, balloonImg;
var backgroundImg;
var database;

function preload(){
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  balloonImg = loadImage("Hot Air Ballon-02.png")
   

}
function setup() {
  createCanvas(1000,500);
   database = firebase.database;
  balloon = createSprite(400, 200, 10, 10);
  balloon.addImage( balloonImg)
  balloon.scale = 0.4
  var balloonPositionRef= database.ref('balloon/position');
balloonPositionRef.on("value",readPosition);
}

function draw(){
  background(backgroundImg);  
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
   balloon.y = balloon.y+10;
}
}
function writePosition(x,y){
  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y
  })

}
function readPosition(data){
position= data.val();
balloon.x=position.x;
balloon.y=position.y;
}