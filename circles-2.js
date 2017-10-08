var sizes = [40, 70, 90, 30, 60, 10, 50, 40];

function setup() {
  createCanvas(1000, 1000);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    colorMode(HSB)
		fill(100,75,46);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
}
