function setup() {
    createCanvas (1200, 400);
}

function draw() {
    background(200);

    // constraints
    let x = constrain(mouseX, 0, 1180);
    let y = constrain(mouseY, 320, 350);

    rect(x, y, 20, 50)
}