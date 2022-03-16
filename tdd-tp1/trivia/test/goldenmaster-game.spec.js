const seedrandom = require('seedrandom');
require('../src/game.js');

function getRndInteger(min, max, seed) {
	let rand = seedrandom(String(seed))
	return Math.floor(rand() * (max - min + 1)) + min;
}

describe("Goldenmaster", () => {
	it("should create a Goldenmaster", () => {
		let notAWinner = false;
		let game = new Game();
		let numberOfPlayers = getRndInteger(2, 10, "Ready Player One")

		for (let i = 0; i < numberOfPlayers; i++) {
			game.add(`Player ${i}`);
		}

		let i = 0;
		do {
			game.roll(getRndInteger(0, 5, i) + 1);
			if (getRndInteger(0, 6, i) === 3) {
				notAWinner = game.wrongAnswer();
			} else {
				notAWinner = game.wasCorrectlyAnswered();
			}
			i++;
		} while (notAWinner);
	});
});
