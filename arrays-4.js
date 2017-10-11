var shades=[10,20,30,40,50,60,70,80];

function setup() { 
  createCanvas(400, 400);
	colorMode(HSB);
	noStroke();

for (var i=0; i<9; i++){
	rect[i]={
	s: shades[i],
	x: i*width/9,
	y: 0,
	z: width/9,
	q: height,

		drawRect: function(){
			fill(this.s,100,100);
			rect(this.x,this.y,this.z,this.q);
			},
	}
}
}


function draw() { 
	for (var i=0;i<9;i++){
		rect[i].drawRect();
	}
}
