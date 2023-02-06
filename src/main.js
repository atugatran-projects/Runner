import kaboom from "kaboom";
import { gameOver } from "./gameover";
import { game } from "./game";
import { controls } from "./addObjects";

// Setting a title for the page
document.title = "Runner";

// Initialize context
kaboom({
	font: "sink",
	background: [100, 462, 426],
});
// kaboom();


// load assets
// Background
loadSprite("floor", "/sprites/background/floor.png")
loadSprite("cloud", "/sprites/background/cloud.png")
// Enimies
loadSprite("cactus", "/sprites/enemies/cactus.png")


function addButton(txt, p, f) {

	const btn = add([
		text(txt),
		pos(p),
		area({ cursor: "pointer", }),
		scale(10),
		origin("center"),
	])

	btn.onClick(f)

	btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.color = rgb(
				wave(0, 255, t),
				wave(0, 255, t + 2),
				wave(0, 255, t + 4),
			)
			btn.scale = vec2(7)
		} else {
			btn.scale = vec2(5)
			btn.color = rgb()
		}
	})

}

const start = () => {
	setTimeout(() => {
		go("game")
	}, 500);
	debug.clearLog()
}

addButton("Boy", vec2(width() / 2, height() / 2 - 50), () => {
	loadSprite("person", "/sprites/Player/boy.png")
	start()
})
addButton("Girl", vec2(width() / 2, height() / 2 + 50), () => {
	loadSprite("person", "/sprites/Player/girl.png")
	start()
})
addButton("You Are", vec2(width() / 2, height() / 3 - 20), () => debug.log("Pls Select Boy & Girl"))

// reset cursor to default at frame start for easier cursor management
onUpdate(() => cursor("default"))


controls()
game()
gameOver()
