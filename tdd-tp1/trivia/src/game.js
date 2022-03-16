const fs = require("fs");
const process = require("process");
const util = require("util");
exports = typeof window !== "undefined" && window !== null ? window : global;

var logFile = fs.createWriteStream('log.txt');
var logStdout = process.stdout;

console.log = function () {
	logFile.write(util.format.apply(null, arguments) + '\n');
	logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;

class Question {
	constructor(cat, index) {
		this.cat = cat;
		this.index = index;
	}

	generateQuestion() {
		return `${this.cat} Question ${this.index}`;
	}
}

class QuestionManager {
	constructor(nbr) {
		this.numbersOfQuestions = nbr;
		this.popQuestions = [];
		this.scienceQuestions = [];
		this.sportsQuestions = [];
		this.rockQuestions = [];
	}

	generateQuestions() {
		for (let i = 0; i < this.numbersOfQuestions; i++) {
			this.popQuestions.push(new Question("Pop", i).generateQuestion());
			this.scienceQuestions.push(new Question("Science", i).generateQuestion());
			this.sportsQuestions.push(new Question("Sports", i).generateQuestion());
			this.rockQuestions.push(new Question("Rock", i).generateQuestion());
		}
	}

	pickAQuestion(cat) {
		return this[`${cat.toLowerCase()}Questions`].shift();
	}

	pickQuestionFromPlayerPlace(place) {
		return this.pickAQuestion(this.getCurrentCategory(place));
	}

	getCurrentCategory(place) {
		if ([0, 4, 8].includes(place)) {
			return 'Pop';
		} else if ([1, 5, 9].includes(place)) {
			return 'Science';
		} else if ([2, 6, 10].includes(place)) {
			return 'Sports';
		} else {
			return 'Rock';
		}
	}
}

class Player {
	constructor(name) {
		this.name = name;
		this.purse = 0;
		this.inPenaltyBox = false;
		this.place = 0;
	}

	updatePlace(roll) {
		this.place += roll;
		if (this.place > 11) {
			this.place -= 12;
		}
	}

	incrementPurse() {
		this.purse += 1;
	}

	setPenality() {
		this.inPenaltyBox = true;
	}
}

class PlayerManager {
	constructor() {
		this.playerList = [];
		this.currentPlayer = 0;
	}

	createPlayer(name) {
		let p = new Player(name);
		this.playerList.push(p);
	}

	getCurrentPlayer() {
		return this.playerList[this.currentPlayer];
	}

	getNumberOfPlayers() {
		return this.playerList.length;
	}

	nextPlayer() {
		this.currentPlayer += 1;
		if (this.currentPlayer >= this.playerList.length) {
			this.currentPlayer = 0;
		}
	}
}

exports.Game = function () {
	let qm = new QuestionManager(50);
	qm.generateQuestions();

	let pm = new PlayerManager();

	let isGettingOutOfPenaltyBox = false;

	let didPlayerWin = () => !(pm.getCurrentPlayer().purse === 6)

	this.add = function (playerName) {
		pm.createPlayer(playerName);
		console.log(playerName + " was added");
		console.log("They are player number " + pm.getNumberOfPlayers());

		return true;
	};

	this.roll = function (roll) {
		console.log(pm.getCurrentPlayer().name + " is the current player");
		console.log("They have rolled a " + roll);

		if (pm.getCurrentPlayer().inPenaltyBox) {
			isGettingOutOfPenaltyBox = roll % 2 !== 0;
			console.log(pm.getCurrentPlayer().name + ` is ${isGettingOutOfPenaltyBox ? "" : "not "}getting out of the penalty box`);
			if (!isGettingOutOfPenaltyBox) return;
		}

		pm.getCurrentPlayer().updatePlace(roll);
		console.log(pm.getCurrentPlayer().name + "'s new location is " + pm.getCurrentPlayer().place);
		console.log("The category is " + qm.getCurrentCategory(pm.getCurrentPlayer().place));
		console.log(qm.pickQuestionFromPlayerPlace(pm.getCurrentPlayer().place));
	};

	this.wasCorrectlyAnswered = function () {
		if (pm.getCurrentPlayer().inPenaltyBox && !isGettingOutOfPenaltyBox) {
			pm.nextPlayer();
			return true;
		}
		console.log("Answer was correct!!!!");
		pm.getCurrentPlayer().incrementPurse();
		console.log(pm.getCurrentPlayer().name + " now has " + pm.getCurrentPlayer().purse + " Gold Coins.");
		let winner = didPlayerWin();
		pm.nextPlayer();

		return winner;
	};

	this.wrongAnswer = function () {
		console.log('Question was incorrectly answered');
		console.log(pm.getCurrentPlayer().name + " was sent to the penalty box");
		pm.getCurrentPlayer().setPenality();
		pm.nextPlayer();

		return true;
	};
};
