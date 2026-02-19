// sections setup
let steps = 0;
let maxSteps = 5;

// easing setup
var x = 20;
var y = 20;
var easing = 0.05;

function setup() {
    createCanvas (400, 400);
}

function draw() {
    background(220);
    fill(0);
    textSize(16);
    text("Click me, I'm hungry!", 125, 370);
    
    // sections
    let sectionHeight = height / maxSteps;
    noStroke();
    fill(100, 161, 100)
    for (let i=0; i < steps; i++) {
        rect(0, i * sectionHeight, width, sectionHeight);
    }

    // 'eating' full
    if (steps >= maxSteps) {
        fill(0)
        text("Thanks, now I'm full! \nPRESS SPACE TO RESET", 100, 355);
    }

    // 'eating' reset
    if (keyIsPressed) {
        if (keyCode == 32) {
        steps = 0;
        }
    }

    // ellipse easing towards mouse
    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y) * easing;
    fill(220)
    ellipse(x, y, 40);
}

// 'eating' increase
function mousePressed() {
    if (steps < maxSteps) {
        steps += 1;
    }
}