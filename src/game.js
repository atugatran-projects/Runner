import { spawnFloor, spawnCactus, cloud, controls  } from "./addObjects";
// Variables
const JUMP_FORCE = 800

const game = () => {
    scene("game", () => {
        // define gravity
        gravity(2400)

        // add Player
        const player = add([
            sprite("person"),
            pos(80, 40),
            scale(0.5),
            area(),
            body(),
        ])

        // Jump Func
        function jump() {
            if (player.isGrounded()) {
                player.jump(JUMP_FORCE)
            }
        }
        onKeyPress("up", jump)
        onClick(jump)

        //  spawning Enimies
        spawnCactus()
        // spawning Background
        spawnFloor()
        cloud()
        controls()


        // lose if player collides with any game obj with tag "Enemy"
        player.onCollide("Enemy", () => {
            // go to "lose" scene and pass the score
            go("lose", score)
            burp()
        })

        // keep track of score
        let score = 0

        // Score
        const scoreLabel = add([
            text(score),
            pos(50, height() - 70),
            scale(4),
        ])
        // increment score every frame
        onUpdate(() => {
            score++
            scoreLabel.text = score
        })

    })
}

module.exports = { game }