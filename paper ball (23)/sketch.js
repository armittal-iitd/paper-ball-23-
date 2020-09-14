var ball,bin1,bin2,bin3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(20,200,50,50);
	ground =new Ground(400,670,800,30);
	bin1 = new Bin(500,20,20,100);
	bin1.shapeColor=color(255);
	bin2 = new Bin(605,20,200,30);
	bin3 = new Bin(700,20,20,100);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ball.display();
  ground.display();
  bin1.display();
  bin3.display();
  bin2.display();

  keypressed();
  drawSprites();
 
}

function keypressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1.5,y: -9.5})
	}

}


