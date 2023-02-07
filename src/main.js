import kaboom from "kaboom";
import { gameOver } from "./gameover";
import { game } from "./game";
import { controls, boyGirl, Sounds } from "./addObjects";

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

// Sounds
loadSound("bgMusic", "Sounds/bgMusic.mp3")
loadSound("gameOverMusic", "Sounds/gameOverMusic.mp3")
loadSound("jumpMusic", "Sounds/jumpMusic.mp3")
loadSound("selectMusic", "Sounds/selectMusic.mp3")
let selectMusic;


const start = () => {
	setTimeout(() => {
		go("game")
	}, 500);
	debug.clearLog()
}

onKeyPress("b", () => {
	loadSprite("person", "sprites/Player/boy.png")
	selectMusic = play("selectMusic", { volume: 0.6 });
	start()
})
onKeyPress("g", () => {
	loadSprite("person", "sprites/Player/girl.png")
	selectMusic = play("selectMusic", { volume: 0.6 });
	start()
})

controls()
boyGirl()
game()
gameOver()
