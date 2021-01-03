var box1,box2,box3,box1Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	box1Img=loadImage(dustbingreen.png)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(400,350,70)
  
  ground = new Ground(200,height,1000,20)
  
  box1 = createSprite(400,650,200,20);
	box1.addImage(box1Img);
  
	box2 = createSprite(310,600,20,100);
	box2.shapeColor=color("white")
	
	box3 = createSprite(490,600,20,100);
	box3.shapeColor=color("white")

  

	Engine.run(engine);
  

}


function draw() {
  background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ball1.display();
    ground.display();
    drawSprites()
}

function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
    }
}


