function setup() {
    createCanvas (1000, 200);
}

function draw() {
    background(220);
    // green area
    noStroke()
    fill(100, 161, 100)
    rect(600, 0, 100, height);

    // bus movement
    let busX = -80+frameCount*2;
    let busY = 130;
    if (busX > 800) {
        busX = 800;
        fill(0)
        textSize(20);
        text("You missed the bus…", 40, 100);
    }
    
    fill(0)
    textSize(16);
    text("Click to board the bus while it's on green!", 40, 40);

    // bus!
    fill(10)
    stroke(0)
    rect(busX, busY, 60, 40)
    rect(busX+60, busY+20, 10, 20)
    fill(220)
    rect(busX+40, busY+8, 13, 12)
    ellipse(busX+14, busY+40, 15)
    ellipse(busX+52, busY+40, 15)
    // end bus!

///////////////////////////// BOARD BUS
    if (mouseIsPressed) {
        if (busX > 530 && busX < 700) {
            noLoop();
            fill(0)
            textSize(20);
            text("Yay! You boarded the bus!", 40, 100);
        }
        else {
            noLoop();
            fill(0)
            textSize(20);
            text("That's not the bus stop…", 40, 100);
        }
    }
}