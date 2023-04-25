let x;
let y;
let z;
let a = 24;

function setup() {
  let minSide = min(windowWidth, windowHeight);
  let z = round(minSide / 160) * 120;
  createCanvas(z, z);
  
}

function draw() {
  frameRate();
  background(255);
  for(x = 1; x <= width; x += 24){
    for(y = 1; y <= height; y += 30){
      absolutelyRandom()
    }
  }
}

function absolutelyRandom(){
  stroke(0);
  strokeWeight(1.2);
  noFill();

  let w = 0.07;

  if(random(1) < w){
  line(0.25*a + x, 0*a + y, 0.25*a + x, 0.5*a + y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0.5*a + y, 0.25*a + x, 0.75*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0.5*a + y, 0.25*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 0.5*a + y, 0.75*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 0.5*a + y, 0.75*a + x, 0.75*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 0*a + y, 0.75*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0.5*a + y, 0.5*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(3/8*a + x, 0.5*a + y, 5/8*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.5*a + x, 0.5*a + y, 0.75*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0*a + y, 0.5*a + x, 0*a +y);
  }
  if(random(1) < w){
  line(0.5*a + x, 0*a + y, 0.75*a + x, 0*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 1*a + y, 0.5*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.5*a + x, 1*a + y, 0.75*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0*a + y, 0.5*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 1*a + y, 0.5*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 0*a + y, 0.5*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 1*a + y, 0.5*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.5*a + x, 0*a + y, 0.75*a + x, 0.5*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0.5*a + y, 0.75*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0.5*a + y, 0.75*a + x, 0*a +y);
  }
  if(random(1) < w){
  line(0.5*a + x, 0*a + y, 0.25*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.5*a + x, 0*a + y, 0.75*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.25*a + x, 0*a + y, 0.5*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 0*a + y, 0.5*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.125*a + x, 0*a + y, 0.25*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.125*a + x, 1*a + y, 0.25*a + x, 0*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 0*a + y, 0.875*a + x, 1*a +y);
  }
  if(random(1) < w){
  line(0.75*a + x, 1*a + y, 0.875*a + x, 0*a +y);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.25*a + y, 0.5*a, 0.5*a, -PI/2, 0);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.25*a + y, 0.5*a, 0.5*a, -PI, -PI/2);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.75*a + y, 0.5*a, 0.5*a, 0, PI/2);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.75*a + y, 0.5*a, 0.5*a, PI/2, PI);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.25*a + y, 0.5*a, 0.5*a, -PI/2, PI/2);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.75*a + y, 0.5*a, 0.5*a, -PI/2, PI/2);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.25*a + y, 0.5*a, 0.5*a, PI/2, -PI/2);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.5*a + y, 0.625*a, 1*a, -PI/2, PI/2);
  }
  if(random(1) < w){
  arc(0.5*a + x, 0.5*a + y, 0.625*a, 1*a, PI/2, -PI/2);
  }
}
