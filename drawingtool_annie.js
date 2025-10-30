function setup() {
  
createCanvas(windowWidth, windowHeight);
background('#222222');
}


function draw() {
  fill(mouseX%500, mouseY%500,(mouseX+mouseY)%500);
   strokeWeight(2);
  ellipse(mouseX, mouseY, 40, 40);
  ellipse(width-mouseX, mouseY, 40, 40);
  ellipse(pmouseX, pmouseY, 40, 40);
  ellipse(width-pmouseX, pmouseY, 40, 40);
  square(width-mouseX, mouseY, 60);
  square(pmouseX, pmouseY, 60);
  square(width-pmouseX, pmouseY, 60);
  fill(mouseY,50,mouseY);
  stroke(1)
  triangle(mouseY,mouseY,10,mouseX,20,20);
  fill(10,100,mouseX);
  stroke(1)
   triangle(mouseX/5,mouseX/2,10,mouseY/7,mouseX,30);
}

function keyPressed() {
  background('#222222');
}
