let frameCounter = 0;
let level = 0;
let win = false;
let fail = false; // allows reset & prevents mousePressed text from appearing after "missed bus" text appears
let stopX = 600;
let wrongX = 400;

function setup() {
    createCanvas (1000, 200);
}

///////////////////////// KEY PRESS + RESET
function keyPressed() {
    if (fail == true) {
        fail = false;
        frameCounter = 0;
        level = 0;
        stopX = 600;
        wrongX = 400;
        loop();
    }

    if (win == true) {
        win = false;
        frameCounter = 0;
        level += 1;
        stopX = random(200, 700);
        wrongX = random(100, 800, [stopX > stopX+100]);
        loop();
    }
}


///////////////////////////////////////////// GAME START!!!
function draw() {
    frameCounter++;
    background(194, 232, 240);
    // road
    fill(130)
    noStroke()
    rect(0, 175, width, 40)

    // WRONG STOP AREA
    fill(237, 138, 138)
    rect(wrongX, 175, 100, 10); // red area
    fill(10)
    rect(wrongX+70, 110, 4, 66); // pole
    fill(237, 138, 138)
    stroke(0)
    //sign
    ellipse(wrongX+72, 110, 30);
    ellipse(wrongX+72, 110, 23);
    // END WRONG STOP AREA

    // BUS STOP AREA
    fill(152, 191, 151)
    noStroke()
    rect(stopX, 175, 100, 10); // green area
    fill(10)
    rect(stopX+70, 110, 4, 66); // pole
    fill(152, 191, 151)
    stroke(0)
    //sign
    ellipse(stopX+72, 110, 30);
    ellipse(stopX+72, 110, 23);
    // END BUS STOP AREA

    // instructions
    noStroke()
    fill(0)
    textSize(16);
    text("Click to stop the bus. Aim for the green stop!", 40, 40);
    text("LEVEL " + (level + 1) + " of 10", 870, 40);

    // bus position & movement
    let busX = -80+frameCounter*2 *(level+1);
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
    fill(217, 168, 15)
    noStroke()
    rect(busX, busY, 60, 40, 4) // body
    rect(busX+55, busY+20, 15, 20, 3); // nose
    // wheels
    fill(40)
    ellipse(busX+14, busY+40, 15)
    ellipse(busX+52, busY+40, 15);
    fill(255)
    ellipse(busX+14, busY+40, 7)
    ellipse(busX+52, busY+40, 7);
    // windows right to left
    fill(167, 204, 212)
    stroke(168, 119, 7)
    rect(busX+48, busY+8, 11, 12)
    rect(busX+31, busY+8, 8, 12)
    rect(busX+19, busY+8, 8, 12)
    rect(busX+7, busY+8, 8, 12)
    /// end bus! ///

/////////////////////////////////////////// BOARD BUS
    if (mouseIsPressed && fail == false) {
        if (busX > stopX-50 && busX < stopX+60) {
            if (level >= 9) {
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


