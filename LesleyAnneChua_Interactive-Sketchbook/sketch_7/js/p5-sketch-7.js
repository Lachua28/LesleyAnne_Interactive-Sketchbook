// sections setup
let steps = 0;
let maxSteps = 6;
let grey = [];
let rColour = [];

function setup() {
    createCanvas (400, 400);

    for (var i = 0; i < maxSteps; i++) {
        grey[i] = random(0, 255);
        rColour[i] = random(0, 1);
    }
}

function draw() {
    background(220);
    fill(0);
    textSize(16);
    text("Click me!", 170, 60);

    // sections
    let sectionWidth = width / maxSteps;

    for (let i=0; i < steps; i++) {
        // top rectangle
        noStroke();
        fill(grey[i])
        rect(i * sectionWidth, 100, sectionWidth, 100);

        // bottom rectangle
        if (rColour[i] > 0.5) {
            fill(131, 212, 104);
            rect(i * sectionWidth, 250, sectionWidth, 100);
        }
        else {
            fill(212, 104, 104);
            rect(i * sectionWidth, 250, sectionWidth, 100);
        }


    }
}

// increase
function mousePressed() {
    if (steps < maxSteps) {
        steps += 1;
    }
}