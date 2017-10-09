function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	colorMode(RGB)
  background(0);
	
	strokeWeight(10)
	stroke(255)
	line(100,0,100,400)
	line(150,0,150,400)
	line(270,0,270,400)
	line(100,100,150,100)
	line(0,270,100,270)
	line(150,150,270,150)
	
}
