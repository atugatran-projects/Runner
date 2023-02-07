import { spawnFloor, spawnCactus, cloud, controls, Sounds } from "./addObjects";
// Variables
const JUMP_FORCE = 800

const game = () => {
    scene("game", () => {
        // sounds
        let backgroundMusic = play("bgMusic", { volume: 0.6, loop: true });
        let jumpMusic;
        let gameOverMusic;

        // define gravity
        gravity(2400)
        backgroundMusic.play()
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
            jumpMusic = play("jumpMusic", { volume: 0.6 });
            if (player.isGrounded()) {
                player.jump(JUMP_FORCE)
            }
        }
        onKeyPress("up", jump)
        // onClick(jump)

        //  spawning Enimies
        spawnCactus()
        // spawning Background
        spawnFloor()
        cloud()
        controls()


        // lose if player collides with any game obj with tag "Enemy"
        player.onCollide("Enemy", () => {
            backgroundMusic.pause();
            gameOverMusic = play("gameOverMusic", { volume: 0.6 });
            // go to "lose" scene and pass the score
            go("lose", score)
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