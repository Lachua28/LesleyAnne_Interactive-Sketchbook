// steps setup
let steps = 0;
let maxSteps = 6;

function setup() {
    createCanvas (1000, 200);
}

function draw() {
    background(220);
    // green area
    noStroke()
    fill(100, 161, 100)
    rect(600, 0, 100, height);

    // constraints
    let x = constrain(mouseX, 40, 1100);
    let y = constrain(mouseY, 130, 130);
    
    fill(0)
    textSize(16);
    text("Hold SPACE to board the bus while it's on green!", 40, 40);

    // bus!
    fill(10)
    stroke(0)
    rect(x, y, 60, 40)
    rect(x+60, y+20, 10, 20)
    fill(220)
    rect(x+40, y+8, 13, 12)
    ellipse(x+14, y+40, 15)
    ellipse(x+52, y+40, 15)
    // end bus!

    if (keyIsPressed && keyCode == 32) {
        if (mouseX > 530 && mouseX < 700) {
            fill(0)
            textSize(20);
            text("Yay! You boarded the bus!", 40, 100);
        }
        else {
            fill(0)
            textSize(20);
            text("That's not the bus stop…", 40, 100);
        }
    }
}


