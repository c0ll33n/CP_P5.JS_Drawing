//create variables for your buttons
var ekorts = 1

var pinkButton;
var purpleButton;
var greenButton;
var yellowButton;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(220);
  stroke(0);

  //some text for instructions
  textSize(19);
  fill(165, 173, 167)
  text('press 1-4 to change the stroke, and z to clear the canvas', 10, 16);
  
  //pink
  pinkButton = createButton('pink');
  pinkButton.position(20,50);
  pinkButton.style('background-color',color(240, 173, 231))
  pinkButton.mousePressed(turnPink);
  
  purpleButton = createButton('purple');
  purpleButton.position(20,150);
  purpleButton.style('background-color',color(217, 145, 255))
  purpleButton.mousePressed(turnPurple);
  
  greenButton = createButton('green');
  greenButton.position(20,250);
  greenButton.style('background-color',color(173, 240, 219))
  greenButton.mousePressed(turnGreen);
  
  yellowButton = createButton('yellow');
  yellowButton.position(20,350);
  yellowButton.style('background-color',color(240, 227, 173))
  yellowButton.mousePressed(turnYellow);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(ekorts)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
   if (keyIsPressed) {
    if (key == '1') {
      ekorts = (1);
    }
    if (key == '2') {
      ekorts = (4);
    }
    if (key == '3') {
      ekorts = (8);
    }
    if (key == '4') {
      ekorts = (12);
    }
     if (key == 'z') {
      //clear();
      background(220)
      
      
    }
  
  }

}

//define the call back functions to run when the buttons are clicked
function turnPink() {
  stroke(240, 173, 231);
}

function turnPurple() {
  stroke(217, 145, 255);
}

function turnGreen() {
  stroke(125, 250, 158);
}
function turnYellow() {
  stroke(240, 227, 173);
}