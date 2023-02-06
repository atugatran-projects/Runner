// Variables
let SPEED = 400


setInterval(() => {
    SPEED = SPEED + 5
}, 3000);

// Background
function spawnFloor() {
    add([
        sprite("floor"),
        pos(-40, height() + 275),
        origin("botleft"),
        area(),
        solid(),
        scale(4),
    ])
}

function cloud() {
    add([
        sprite("cloud"),
        area(),
        pos(width(), 20),
        rand(width(), 40),
        origin("center"),
        move(LEFT, SPEED),
        cleanup(),
    ])

    // wait a random amount of time to spawn next tree
    wait(rand(0.6, 0.6), cloud)
}

// Enemies
function spawnCactus() {
    add([
        sprite("cactus"),
        area(),
        pos(width(), height() - 128),
        origin("center"),
        scale(0.5),
        move(LEFT, SPEED),
        cleanup(),
        "Enemy",
    ])
    // wait a random amount of time to spawn next tree
    wait(rand(1.6, 1), spawnCactus)
}

function controls(){
    add([
        text("(A) Reset"),
        pos(width() -150, height() - 80),
        scale(2),
    ])
    add([
        text("(^) Jump"),
        pos(width() -150, height() - 50),
        scale(2),
    ])
}

module.exports = { spawnFloor, spawnCactus, cloud,controls }