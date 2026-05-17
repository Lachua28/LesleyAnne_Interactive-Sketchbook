let images = [];
let currentIndex = 0;

function preload() {
  images[0] = loadImage("./img/january.jpg");
  images[1] = loadImage("./img/frogbert.jpg");
  images[2] = loadImage("./img/flowerchild.jpg");
  images[3] = loadImage("./img/matcha.jpg");
  images[4] = loadImage("./img/inhaler.jpg");
}

function setup() {
    createCanvas(windowWidth * 0.75, windowHeight * 0.75);
    textSize(16);
}

function draw() {
    background(220);
    
    let img = images[currentIndex];
    image(img, 0, 0, height, height);
}

// logic; same as in-class demo
function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        currentIndex++;
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