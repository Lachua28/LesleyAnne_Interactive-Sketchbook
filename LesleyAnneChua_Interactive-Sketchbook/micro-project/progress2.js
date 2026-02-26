let frameCounter = 0;
let currentLevel = 0;
let win = false;
let fail = false; // allows reset & prevents mousePressed text from appearing after "missed bus" text appears
let stopX = 600;

function setup() {
    createCanvas (1000, 200);
}

///////////////////////// KEY PRESS + RESET
function keyPressed() {
    if (fail == true) {
        fail = false;
        frameCounter = 0;
        currentLevel = 0;
        stopX = 600;
        loop();
    }

    if (win == true) {
        win = false;
        frameCounter = 0;
        currentLevel += 1;
        stopX = random(200, 700);
        loop();
    }
}


///////////////////////////////////////////// GAME START!!!
function draw() {
    frameCounter++;
    background(220);
    noStroke()
    fill(152, 191, 151)
    rect(stopX, 175, 100, 10); // BUS STOP area
    fill(10)
    rect(stopX+70, 110, 4, 66); // pole
    fill(255)
    stroke(0)
    //sign
    ellipse(stopX+72, 110, 30);
    ellipse(stopX+72, 110, 23);

    // instructions
    noStroke()
    fill(0)
    textSize(16);
    text("Click to stop the bus at the bus stop!", 40, 40);
    text("LEVEL " + (currentLevel + 1) + " of 10", 870, 40);

    // bus position & movement
    let busX = -80+frameCounter*2 *(currentLevel+1);
    let busY = 130;
    // stop bus & failure state if bus passes bus stop
    if (busX > 900) {
        noLoop();
        fail = true;
        textStyle(BOLD)
        fill(0)
        textSize(20);
        text("You missed the stop…", 40, 80);
        textStyle(NORMAL)
        textSize(16)
        text("Press any key to restart", 43, 100);
    }

    /// bus! ///
    fill(0)
    stroke(0)
    rect(busX, busY, 60, 40, 4) // body
    rect(busX+60, busY+20, 10, 20, 3); // nose
    // wheels
    fill(255)
    ellipse(busX+14, busY+40, 15)
    ellipse(busX+52, busY+40, 15);
    noStroke()
    fill(60)
    ellipse(busX+14, busY+40, 7)
    ellipse(busX+52, busY+40, 7);
    // windows right to left
    fill(220)
    rect(busX+48, busY+8, 11, 12)
    rect(busX+31, busY+8, 8, 12)
    rect(busX+19, busY+8, 8, 12)
    rect(busX+7, busY+8, 8, 12)
    /// end bus! ///

/////////////////////////////////////////// BOARD BUS
    if (mouseIsPressed && fail == false) {
        if (busX > stopX-50 && busX < stopX+60) {
            if (currentLevel >= 9) {
                noLoop();
                textStyle(BOLD)
                noStroke()
                fill(0)
                textSize(20);
                text("Yay! You reached all the stops!!!", 40, 80);
                textStyle(NORMAL)
                textSize(16)
                text("Revel in your victory!", 43, 100);
            }
            else {
                win = true;
                noLoop();
                textStyle(BOLD)
                noStroke()
                fill(0)
                textSize(20);
                text("Yay! You reached the bus stop!", 40, 80);
                textStyle(NORMAL)
                textSize(16)
                text("Press any key to continue", 43, 100);
            }
        }
        else {
            fail = true;
            noLoop();
            textStyle(BOLD)
            noStroke()
            fill(0)
            textSize(20);
            text("That's not the bus stop…", 40, 80);
            textStyle(NORMAL)
            textSize(16)
            text("Press any key to restart", 43, 100);
        }
    }
}

