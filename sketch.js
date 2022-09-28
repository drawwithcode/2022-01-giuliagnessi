function preload() {
  // put preload code here
}

function setup() {
  createCanvas(600, 600);
  // put setup code here
  background(260, 204, 153);
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
  rotate(frameCount * 5);
  scale(frameCount / 120);

  if (frameCount == 80) {
  }
  const side = 90; // initial side
  for (i = 0; i < 40; i++) {
    ellipse(15, 10, side * i);
  }
}
