//Growth
let boxDim1 = 40;
let growth1 = 1;

let boxDim2 = 50;
let growth2 = 2;

let circDim1= 10;
let growth3 = .9;

let circDim2= 5;
let growth4 = .5;

//Rotate Watch 1
let angle = 0;
let speed = 0;

//Bounce
let circleX = 300;
let speedCircle = 3;
{let box = 300;
let speedbox = 3;}

function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(51)
  //Growth
  //boxDim1
  if (boxDim1 > 200 || boxDim1 < 40) {
      growth1 = growth1*-1;
    }
    boxDim1 = boxDim1 + growth1;
  //boxDim2
  if (boxDim2 > 100 || boxDim2 < 40) {
      growth2 = growth2*-1;
    }
    boxDim2 = boxDim2 + growth2;
   //circDim1
  if (circDim1 > 50 || circDim1 < -5) {
      growth3 = growth3*-1;
    }
    circDim1 = circDim1 + growth3;
    //circDim2
  if (circDim2 > 100 || circDim2 < -5) {
      growth4 = growth4*-1;
    }
    circDim2 = circDim2 + growth4;
  //Rotate
  rotate(angle);
  angle=angle + speed ;
  
  //Bounce
  if (circleX > 300 || circleX < 0 ) {
    speedCircle = speedCircle *-1;
  }
  circleX = circleX + speedCircle;
  {if (box > width || box < -1 ) {
    speedbox = speedbox *-1;
  }}
  
  //Color
  let c = color(255, 204, 128,);
  fill(c);
  strokeWeight(.25);
  
  //Large Band
  push()
  rect(50, 280, boxDim1, 40);
  pop()
  
  //small circle
  push()
  fill(51)
  noStroke();
  circle(80, 300, circDim1);
  circle(92, 300, 8);
  circle(104, 300, 8);
  circle(116, 300, 8);
  circle(128, 300, 8);
  circle(140, 300, 8);
  circle(152, 300, circDim2);
  pop()
  
  //large Band circle
  push()
  circle(50, 300, 40);
  pop()
  
  //Small Band Side Circle
  push()
  circle(355, 281, 9);
  circle(355, 319, 9);
  pop()
  
  //Small Band Large Circle
  push()
  circle(circleX, 300, circDim2);
  pop()
  
  //Small Band Medium Circle
  push()
  circle(400, 300, 15);
  pop()
  
  //Small Band Small Circle
  push()
  circle(400, 300, 5);
  pop()
  
  //Short Band
  push()
  rect(300, 280, boxDim2, 40);
  pop()
 
  //Watch Crown
  push()
  rect(279, 325, 15, 5);
  pop()
  
  //Watch Face
  push()
  rect(248, 272, 60, 55, 15);
  fill(51)
  rect(250.5, 274.5, 55, 50, 15)
  pop()
}