const seedrandom = require('seedrandom');
require('../src/game.js');

function getRndInteger(min, max, seed) {
	let rand = seedrandom(String(seed))
	return Math.floor(rand() * (max - min + 1)) + min;
}

function generateGame(j) {
  let notAWinner = false;
  let game = new Game();
  let numberOfPlayers = getRndInteger(2, 10, j)

  for (let i = 0; i < numberOfPlayers; i++) {
    game.add(`Player ${i}`);
  }

  let i = 0;
  do {
    game.roll(getRndInteger(0, 5, i + j) + 1);
    if (getRndInteger(0, 6, i + j) === 3) {
      notAWinner = game.wrongAnswer();
    } else {
      notAWinner = game.wasCorrectlyAnswered();
    }
    i++;
  } while (notAWinner);
}

describe("Goldenmaster", () => {
	it("should create a Goldenmaster", () => {
      for (let j = 0; j < 10; j++) {
        generateGame(j);
      }
      const fs = require('fs');

      var str1 = fs.readFileSync('goldenmaster.txt', 'utf-8');
      var str2 = fs.readFileSync('log.txt', 'utf-8');

      expect(str1).toBe(str2);
	});
});
