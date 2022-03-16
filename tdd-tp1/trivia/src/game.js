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

	nextPlayer() {
		this.currentPlayer += 1;
		if (this.currentPlayer >= this.playerList.length) {
			this.currentPlayer = 0;
		}
	}

}

exports.Game = function () {
	let players = new Array();
	let purses = new Array(6);
	let inPenaltyBox = new Array(6);

	let currentPlayer = 0;
	let isGettingOutOfPenaltyBox = false;

	let didPlayerWin = function () {
		return !(purses[currentPlayer] == 6)
	};

	let qm = new QuestionManager(50);
	qm.generateQuestions();

	let pm = new PlayerManager();

	this.add = function (playerName) {

		pm.createPlayer(playerName);

		players.push(playerName);

		purses[this.howManyPlayers() - 1] = 0;
		inPenaltyBox[this.howManyPlayers() - 1] = false;

		console.log(playerName + " was added");
		console.log("They are player number " + players.length);

		return true;
	};

	this.howManyPlayers = function () {
		return players.length;
	};

	let askQuestion = function () {
		console.log(qm.pickQuestionFromPlayerPlace(pm.getCurrentPlayer().place));
	};

	this.roll = function (roll) {
		console.log(pm.getCurrentPlayer().name + " is the current player");
		console.log("They have rolled a " + roll);

		if (inPenaltyBox[currentPlayer]) {
			if (roll % 2 != 0) {
				isGettingOutOfPenaltyBox = true;

				console.log(pm.getCurrentPlayer().name + " is getting out of the penalty box");
				pm.getCurrentPlayer().updatePlace(roll);

				console.log(pm.getCurrentPlayer().name + "'s new location is " + pm.getCurrentPlayer().place);
				console.log("The category is " + qm.getCurrentCategory(pm.getCurrentPlayer().place));
				askQuestion();
			} else {
				console.log(pm.getCurrentPlayer().name + " is not getting out of the penalty box");
				isGettingOutOfPenaltyBox = false;
			}
		} else {

			pm.getCurrentPlayer().updatePlace(roll);

			console.log(pm.getCurrentPlayer().name + "'s new location is " + pm.getCurrentPlayer().place);
			console.log("The category is " + qm.getCurrentCategory(pm.getCurrentPlayer().place));
			askQuestion();
		}
	};

	this.wasCorrectlyAnswered = function () {
		if (inPenaltyBox[currentPlayer]) {
			if (isGettingOutOfPenaltyBox) {
				console.log('Answer was correct!!!!');
				purses[currentPlayer] += 1;
				console.log(pm.getCurrentPlayer().name + " now has " +
					purses[currentPlayer] + " Gold Coins.");

				let winner = didPlayerWin();
				pm.nextPlayer();
				currentPlayer += 1;
				if (currentPlayer == players.length)
					currentPlayer = 0;

				return winner;
			} else {
				pm.nextPlayer();
				currentPlayer += 1;
				if (currentPlayer == players.length)
					currentPlayer = 0;
				return true;
			}


		} else {

			console.log("Answer was correct!!!!");

			purses[currentPlayer] += 1;
			console.log(pm.getCurrentPlayer().name + " now has " +
				purses[currentPlayer] + " Gold Coins.");

			let winner = didPlayerWin();

			pm.nextPlayer();
			currentPlayer += 1;
			if (currentPlayer == players.length)
				currentPlayer = 0;

			return winner;
		}
	};

	this.wrongAnswer = function () {
		console.log('Question was incorrectly answered');
		console.log(pm.getCurrentPlayer().name + " was sent to the penalty box");
		inPenaltyBox[currentPlayer] = true;

		pm.nextPlayer();
		currentPlayer += 1;
		if (currentPlayer == players.length)
			currentPlayer = 0;
		return true;
	};
};
