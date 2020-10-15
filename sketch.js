const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ball,ground;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
 var options={
  isStatic: true
 }
  ground=Bodies.rectangle(200,400,400,10,options);
  
  World.add(myworld,ground);
  var boptions={
     restitution: 1.5
  }
 ball=Bodies.circle(200,100,10,boptions);
  World.add(myworld,ball);
  // console.log(object);
  
}

function draw() {
  background(0); 
  Engine.update(myengine);
  var pos=ground.position;
  rectMode(CENTER); 
  rect(pos.x,pos.y,400,10);
  var pos2=ball.position;
  ellipseMode(RADIUS);
  ellipse(pos2.x,pos2.y,10,10 )
}