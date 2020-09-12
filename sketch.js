const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
  polygonImg=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

 ground=new Ground(400,350,800,20);
 stand= new Ground(360,270,170,10);

 //lower row
  box1= new Box(300,245,30,40);  
  box2= new Box(330,245,30,40);
  box3= new Box(360,245,30,40);
  box4= new Box(390,245,30,40);
  box5= new Box(420,245,30,40);
  //middle row
  box6= new Box(330,205,30,40);
  box7= new Box(360,205,30,40);
  box8= new Box(390,205,30,40);
  //top row
  box9= new Box(360,165,30,40);

  polygon = Bodies.circle(100,50,30);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:50});

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  imageMode(CENTER)
  image(polygonImg ,polygon.position.x,polygon.position.y,40,40);


  slingShot.display();

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.Attach(polygon.body);
    Matter.Body.setPosition(this.polygon,{x:100,y:50});
  }
}