var dustbin1;
var dustbin2;
var dustbin3;
var paper1;
var Ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var Groundop={
		isStatic:true
	} 
	Ground=Bodies.rectangle(800,650,1600,20,Groundop)
	World.add(world,Ground)
	

	Engine.run(engine);
   
	paper1=new paper(200,630,50);
	dustbin1=new dustbin (1050,630,100,20);
	dustbin2=new dustbin(1100,600,20,100);
	dustbin3=new dustbin(1000,600,20,100);
	
}


function draw() {
  rectMode(CENTER);
  background("lavender");
   paper1.display();
   dustbin1.display();
   dustbin2.display();
   dustbin3.display();
   fill("white")
   rect(Ground.position.x,Ground.position.y,1600,20)
  drawSprites();
 
}
 function keyPressed(){
     if (keyCode=== UP_ARROW){
		 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:125,y:-125})
	 }
 }


