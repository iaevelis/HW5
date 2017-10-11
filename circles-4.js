var sizes = [40, 70, 90, 30, 60];
ellipses=[];
function setup() {
  createCanvas(600, 600);
for (var i=0; i<8;i++){

	ellipses[i]={
		x: 50+i*100,
		y: 10,
		z1: sizes[i],
		z2: sizes[i],
		v: 80,
		drawEllipse: function(){
			fill(0);
			noStroke;
			ellipse(this.x,this.y,this.z1,this.z2);
		},
move: function(){
	if(this.y>500){
	this.v=-10;
}

	if(this.y<0){
	this.v=20;
}
	this.y=this.y+this.v;
}
}	
}
}
