// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var engine,world;

var ground,ball,tanker;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    engine = Engine.create();
    world = engine.world;
   var  canvas=createCanvas(800,600);
   ground=new Ground(500,580,1000,30);
   tanker=new Tanker(150,530,70,70);
  tankerBody=new Tanker(140,465,20,20);
  tankerHead=new Tanker(150,480,60,30)
 // canonBall=new CanonBall(200,200);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(100);
Engine.update(engine);
 fill(250);

ground.display();
tanker.display();
tankerBody.display();
tankerHead.display();

rotate(-PI/10)
rect(20,470,75,20);

}
