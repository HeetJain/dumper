var dustbin1,dustbin2,dustbin3;
var ground;
var paper;
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


	dustbin1 = new Dustbin(1100,635,150,20);
	dustbin2 = new Dustbin(1020,600,20,100);
  dustbin3 = new Dustbin(1180,600,20,100);
	paper = new Paper(100,215,40);
	ground = new Ground(width/2, 650, width,10);



	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

  }
}
