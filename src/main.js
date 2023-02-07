import kaboom from "kaboom";
import { gameOver } from "./gameover";
import { game } from "./game";
import { controls, boyGirl } from "./addObjects";

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
loadSprite("floor", "sprites/background/floor.png")
loadSprite("cloud", "sprites/background/cloud.png")
// Enimies
loadSprite("cactus", "sprites/enemies/cactus.png")

const start = () => {
	setTimeout(() => {
		go("game")
	}, 500);
	debug.clearLog()
}

onKeyPress("b", () => {
	loadSprite("person", "sprites/Player/boy.png")
	start()
})
onKeyPress("g", () => {
	loadSprite("person", "sprites/Player/girl.png")
	start()
})

controls()
boyGirl()
game()
gameOver()
