var shades=[10,20,30,40,50];

function setup() { 
  createCanvas(400, 400);
	colorMode(HSB);
	noStroke();

for (var i=0; i<5; i++){
	rect[i]={
	s: shades[i],
	x: i*width/5,
	y: 0,
	z: width/5,
	q: height,

		drawRect: function(){
			fill(this.s,100,100);
			rect(this.x,this.y,this.z,this.q);
			},
	}
}
}


function draw() { 
	for (var i=0;i<5;i++){
		rect[i].drawRect();
	}
}
