function setup() {
    createCanvas (400, 400);
    background(220);
    textSize(16);
    text("Click me, I'm hungry!", 125, 200);
}

mouseClicked = function() {
    fill(100, 161, 100)
    noStroke()
    rect(0, 10, 400, 400)
    fill(0)
    text("Thanks, now I'm (mostly) full!", 95, 200);
}