var sizes = [3.8, 9.5, 10, 5.3, 112.0, 94.5, 40, 38.8];

function setup() {
  createCanvas(1000, 1000);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    colorMode(HSB)
		fill(100,75,46);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
}
