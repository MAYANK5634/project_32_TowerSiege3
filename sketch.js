const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var engine,world;
var ball;
var spring;
var ground;
var groudhovering;
var polygonimg;
var score = 0;
var bg,bgimg;
var backgroundImg;

function preload(){
polygonimg = loadImage("polygon.png");
getBackgroundImg();
}

function setup (){
createCanvas(1200,500);

engine = Engine.create();
world = engine.world;

box1 = new BOX (1000,390,20,30);
box2 = new BOX (980,390,20,30);
box3 = new BOX (960,390,20,30);
box4 = new BOX (940,390,20,30);
box5 = new BOX (920,390,20,30);
box6 = new BOX (900,390,20,30);
box7 = new BOX (880,390,20,30);

box8 = new BOX (980,360,20,30);
box9 = new BOX (960,360,20,30);
box10 = new BOX (940,360,20,30);
box11 = new BOX (920,360,20,30);
box12 = new BOX (900,360,20,30);

box13 = new BOX (960,330,20,30);
box14 = new BOX (940,330,20,30);
box15 = new BOX (920,330,20,30);

box16 = new BOX (940,300,20,30);

ball = Bodies.circle(400,200,20);
World.add(world,ball);

spring = new PROJECTILE (this.ball,{x:400,y:200});

ground = new PLATFORM (0,495,5000,20);

groundhovering = new PLATFORM (940,415,200,20);

}
 function draw (){

 if(bgimg)
 background(bgimg);
 //score
 fill("blue");
text("SCORE :"+score,500,100)
textSize("20");
 
 Engine.update(engine);
 ground.display();
 groundhovering.display();

//dragging and releasing
fill("red");
text("DRAG THE HEXAGONAL BALL AND RELEASE IT , TO LAUNCH IT TOWARDS THE BLOCKS TO HIT THEM ",300,80)
textSize("30");

//space key second chance
fill("green")
text("PRESS SPACE TO GET THE ONE MORE CHANCE",440,450)
textSize("30");

 debug:true;
  fill ("red");
  box1.display();  
  box2.display();  
  box3.display();
  box4.display();
  box5.display();  
  box6.display();  
  box7.display(); 
  fill ("blue");
  box8.display();
  box9.display();
  box10.display();
  box11.display();  
  box12.display();  
  fill ("green");
  box13.display();  
  box14.display();  
  box15.display();  
 fill ("pink");
  box16.display();  
  

  box1.Score();  
  box2.Score();  
  box3.Score();
  box4.Score();
  box5.Score();  
  box6.Score();  
  box7.Score(); 
  box8.Score();
  box9.Score();
  box10.Score();
  box11.Score();  
  box12.Score();  
  box13.Score();  
  box14.Score();  
  box15.Score();  
  box16.Score();  

  imageMode(CENTER);
  image(polygonimg,ball.position.x,ball.position.y,40,40);

  spring.display();
}
 
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased (){
spring.release();

}
function keyPressed(){
  if(keyCode === 32){
    spring.attach(this.ball);
    Matter.Body.setPosition(this.ball,{x:400,y:200});
  
  }
  
  }
async function getBackgroundImg(){

var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON =  await response.json();

var date = responseJSON.datetime;
var hour = date.slice(11,13);
if(hour>06 && hour<=19){

  bg = "bg.png"
  
  } 
  else{
  
  bg = "bg2.jpg"
  
  }
  bgimg = loadImage (bg)
  


}
 
