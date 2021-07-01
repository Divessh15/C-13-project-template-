var garden,rabbit;
var gardenImg,rabbitImg;
var redleaf,redleafImg,orangeLeaf,orangeLeafImg,apple,appleImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  redLeafImg = loadImage("redLeaf.png");
  orangeleafImg=loadImage("orangeLeaf.png");
  appleImg=loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
 drawSprites();
  
  var select_Sprites=Math.round(random(1,3)) ; 
  
  
 if(frameCount % 80 == 0){
if(select_Sprites==1) {
apple();
} else if(select_Sprites==2) {
redLeaf();
}
 else {
orangeleaf();
}  

}

function redLeaf(){
 
 var redleaf=createSprite(random(100,200),80,10,10); 
 redleaf.velocityY=2;
 redleaf.addImage(redLeafImg) ; 
 redleaf.scale=0.05;
 redleaf.lifetime=100;
}   

function orangeleaf(){

 var orangeleaf=createSprite(random(50,350),80,10,10); 
orangeleaf.velocityY=2;
orangeleaf.addImage(orangeleafImg) ; 
orangeleaf.scale=0.05; 
orangeleaf.lifetime=100;  
}

function apple(){

 var apple=createSprite(random(80,330),80,5,5); 
apple.velocityY=2;
apple.addImage(appleImg) ; 
apple.scale=0.1; 
apple.lifetime=100;
}
  


}








