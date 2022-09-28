function preload() {
  // put preload code here
}

function setup() {
  createCanvas(600, 600);
  // put setup code here
  background(255, 204, 153);
  angleMode(DEGREES);
  colorMode(RGB);
}

function draw() {
  // put drawing code here
  noFill();

  let mycolor = lerpColor(
    color(230, 62, 62),
    color(207, 181, 59),

    frameCount / 800 //color changes from red to yellow
  );

  stroke(mycolor);
  translate(width / 2, height / 2); //center
  scale(frameCount / 140);
  rotate(frameCount * 5);

  if (frameCount == 80) {
  }
  const side = 90; // initial side
  for (i = 0; i < 30; i++) {
    ellipse(15, 10, side * i);
  }
}
