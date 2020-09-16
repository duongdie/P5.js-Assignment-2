//GlowDisappear
let boxColor = 255;
let colorChange = 50;
let bgColor = 50;

let boxColorX = 10;
let colorChangeX = 50;
let bgColorX = 50;

//Bounce
let boxX = 300;
let speedX=1;

let boxY = 300;
let speedY = 2;

let boxZ = 300;
let speedZ = 3;

//Growth

let boxDim1 = 40;
let growth1 = 1;


function setup() {
  createCanvas(600, 600,);

   

}

function draw() {
  background(51)
 
  
  //ClowDisappear
  if (boxColor > 255 || boxColor < bgColor) {
      colorChange = -colorChange;
    }
    boxColor = boxColor + colorChange;
  
  if (boxColorX > 255 || boxColorX < bgColorX) {
      colorChangeX = -colorChangeX;
    }
    boxColorX = boxColorX + colorChangeX;
  
  
  
  //Bounce
    if (boxX > width) {
    speedX = speedX*-1
  } else if (boxX < 0) {
  speedX = speedX*-1 }
  boxX = boxX + speedX;
  
  if (boxY > width) {
    speedY = speedY*-1
  } else if (boxY < 0) {
  speedY = speedY*-1 }
  boxY = boxY + speedY;
  
  if (boxZ > width) {
    speedZ = speedZ*-1
  } else if (boxZ < 0) {
  speedZ = speedZ*-1 }
  boxZ = boxZ + speedZ;
  
  //boxDim1
  if (boxDim1 > 200 || boxDim1 < 40) {
      growth1 = growth1*-1;
    }
    boxDim1 = boxDim1 + growth1; 
  
  
  
  //Color 
  let c = color(255, 204, 128,);
  fill(c);
  
  strokeWeight(.25);
  
  
  //Large Band
  push()
  rect(50, 280, 200, 40);
  pop()
  
  
  //small circle
  push()
  fill(51)
  circle(80, 300, 8);
  circle(92, 300, 8);
  circle(104, 300, 8);
  circle(116, 300, 8);
  circle(128, 300, 8);
  circle(140, 300, 8);
  circle(152, 300, 8);
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
  
  //Short Band
  push()
  rect(300, 280, 99, 40);
  pop()
  
  
  //Small Band Large Circle
  push()
  circle(400, 300, 40); 
  pop()
  
  //Small Band Medium Circle
  push()
  circle(400, 300, 15); 
  pop()
  
  //Small Band Small Circle
  push()
  circle(400, 300, 5); 
  pop()
  
  
  //Watch Crown
  push()
  rect(279, 325, 15, 5);
  pop()
  
  //Watch Face
  push()
  rect(248, 272, 60, 55, 15);
  fill(boxColor)
  rect(250.5, 274.5, 55, 50, 15)
  pop()
  
  //Watch Face Bounce 
  
  fill(boxColor)
  rect(250.5, boxX, 55, 50, 15)
  
  fill(boxColor)
  rect(250.5, boxY, 55, 50, 15)
  
  fill(boxColor)
  rect(250.5, boxZ, 55, 50, 15)
  
  
  
  
}

