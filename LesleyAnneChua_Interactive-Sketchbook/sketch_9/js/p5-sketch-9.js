let images = [];
let colours = [];
let currentIndex = 0;

function preload() {
  images[0] = loadImage("./img/january.jpg");
  images[1] = loadImage("./img/frogbert.jpg");
  images[2] = loadImage("./img/flowerchild.jpg");
  images[3] = loadImage("./img/matcha.jpg");
  images[4] = loadImage("./img/inhaler.jpg");

  // background colours
  colours[0] = "#E09FAA";
  colours[1] = "#E0CA9F";
  colours[2] = "#B3E09F";
  colours[3] = "#9FB7E0";
  colours[4] = "#C69FE0";
}

function setup() {
    // responsive canvas; my Chrome doesn't like it when anything is the full width…
    createCanvas(windowWidth*0.75, windowHeight*0.75);
    imageMode(CENTER);
}

function draw() {
    background(colours[currentIndex]);
    
    let img = images[currentIndex];
    // aspect ratio is conserved with height (since they're square images)
    image(img, width/2, height/2, height, height);

    // TEXT SECTION START
    fill(255);

    // instructions text
    textSize(16);
    text("Press the left and right arrow keys\n to cycle through the images!", width/2, 30);

    stroke(0);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(24);
    // currentIndex text
    text("Slide " + (currentIndex + 1) + "/" + images.length, width/2, height-20);

    // Frogbert text, placed under "draw" function so it stays up after the space bar is pressed, but disappears after moving to another image.
    if(keyPressed && keyCode == 32 && currentIndex == 1) {
        text("This is Frogbert!", width/2, height-100);
    }
}

// image slides
function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        currentIndex++;
        // wrap logic
        if(currentIndex >= images.length) {
            currentIndex = 0;
        }
    }
    
    if(keyCode === LEFT_ARROW) {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = images.length -1;
        }
    }
}