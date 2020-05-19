const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground;
var dustbin_bottom,dustbin_left,dustbin_right;


function setup() {

	var canvas = createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper = new Paper(150,600,30);
	
	ground = new Ground(400,690,800,10);

	dustbin_bottom = new Dustbin(600,680,200,20);
  dustbin_left = new Dustbin(500,625,20,130);
  dustbin_right = new Dustbin(700,625,20,130);


}


function draw() {

  Engine.update(engine);

  background("black");

  paper.display();
  ground.display();

  dustbin_bottom.display();
  dustbin_left.display();
  dustbin_right.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

   Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});

  }
}



