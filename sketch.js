const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var dustbin1 , dustbin2 , dustbin3 , ground1 , paper1 ;



function setup() {
  engine = Engine.create();
  createCanvas(800,800);

world = engine.world;
dustbin1 = new dustbin(200,450,25,50);
ground1 = new ground(400,790,800,10);
//dustbin2 = new dustbin(150,450,25,50);
//dustbin3 = new dustbin(170,770,100,20);
paper1 = new paper(110,450,15,5);

}

function draw() {
  background(0);  
  Engine.update(engine);
  dustbin1.display();
  ground1.display();
  //dustbin2.display();
  //dustbin3.display();
  paper1.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 85 , y : -85})
  }
}