import { controls } from "./addObjects";

const gameOver = () => {
    scene("lose", (score) => {
        // display Person
        add([
            sprite("person"),
            pos(width() / 2, height() / 2 - 80),
            scale(1),
            origin("center"),
        ])
        controls()
        // display score
        add([
            text(score),
            pos(width() / 2, height() / 2 + 80),
            scale(3),
            origin("center"),
        ])

        onKeyPress("a", () => {
            selectMusic = play("selectMusic", { volume: 0.6 });
            go("game")
        })
    })
}

module.exports = { gameOver }
