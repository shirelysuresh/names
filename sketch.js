const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var paperobject;
var x;
var y;
function preload()
{
	
}

function setup() {
	
createCanvas(1800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	paper1 = new Paper(300,300,90,90)
	ground1 = new Ground(390,670,2900,40)

	dustbin1 = new Dustbin(950,400,250,250)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  paper1.display();

  ground1.display();
  dustbin1.display();

  drawSprites();

  

}

function keyPressed() {
	if (keyCode===UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.positon,{x:405,y:-405});
  
	}
}


 