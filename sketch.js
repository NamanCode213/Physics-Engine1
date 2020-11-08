var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine=Matter.Engine.create()
  world=engine.world
  var a={isStatic:true}
  ground=Matter.Bodies.rectangle(400,380,800,24,a)
  Matter.World.add(world,ground)
  var a={restitution:0.5}
  ball=Matter.Bodies.circle(100,100,20,a)
  Matter.World.add(world,ball)
  }

function draw() {
  background(255,255,255);  
  Matter.Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,24)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}