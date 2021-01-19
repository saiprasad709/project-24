
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 
var engine,world;

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;
	
	  paper = new Paper(100,660,15);
	  
	  ground = new Ground(400,680,800,20);

	  leftside = new Dustbin(550,620,20,100);
	  bottom = new Dustbin(610,660,100,20);
	  rightside = new Dustbin(670,620,20,100);

		Engine.run(engine) 
	}

function draw() {
  background(0);
  rectMode(CENTER);
  
  Engine.update(engine);

  paper.display();

  ground.display();
   
  leftside.display();
  bottom.display();
  rightside.display();

  keyPressed();
  
  drawSprites();
 
}
 function keyPressed(){
	 if(keyCode==="UP_ARROW"){
		 Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
 }


