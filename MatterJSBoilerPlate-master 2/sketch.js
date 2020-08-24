
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,500,90);
	bobObject2 = new Bob(325,500,90);
	bobObject3 = new Bob(400,500,90);
	bobObject4 = new Bob(475,500,90);
	bobObject5 = new Bob(550,500,90);

	roof1 = new Roof(400,100,400,40);
	
	rope1 = new Rope(bobObject1.body,roof1.body,-150,20);
	rope2 = new Rope(bobObject2.body,roof1.body,-75,20);
	rope3 = new Rope(bobObject3.body,roof1.body,0,20);
	rope4 = new Rope(bobObject4.body,roof1.body,75,20);
	rope5 = new Rope(bobObject5.body,roof1.body,150,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display(); 

  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-590,y:0});
	}
  }

