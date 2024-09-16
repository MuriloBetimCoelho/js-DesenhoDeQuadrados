function setup() {
    createCanvas(600, 600);
    background(75, 180, 250);
  }
  
  function draw() {  
    stroke("green");
    fill("black");
  
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }

  }

