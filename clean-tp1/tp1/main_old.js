class TraversableArray extends Array {
	next() {
		return this[++this.current];
	}
}

function makeEnum(arr){
	let obj = {};
	for (let val of arr){
		obj[val] = Symbol(val);
	}
	return Object.freeze(obj);
}
const createCarousel = (array) => {
	array.index = 0;
	array.current = function() {
		this.index = this.index % array.length;
		return array[this.index];
	};
	array.next = function() {
		this.index++;
		return this.current();
	};
	array.previous = function() {
		this.index += array.length - 1;
		return this.current();
	};
	array.reset = function() {
		this.index = 0;
		return array[0];
	};
};

class Rover {
	//static Direction = makeEnum(["north","south","east", "west"]);
	static DirectionNorth = Symbol("North");
	static DirectionSouth = Symbol("South");
	static DirectionEast = Symbol("East");
	static DirectionWest = Symbol("West");

	constructor(x, y) {
		this.posX = x;
		this.posY = y;
		const directions = ["north","south","east", "west"];
		createCarousel(directions)
		this.direction = directions;
	}

	changeDirection(side) {
		if (side === "right") {
			this.direction = this.direction.next();
		} else if (side === "left") {
			this.direction = this.direction.previous();
		}
	}

	move() {
		switch (this.direction) {
			case Rover.DirectionNorth:
				this.posY = this.calculateNewPosition(++this.posY);
				break;
			case Rover.DirectionSouth:
				this.posY = this.calculateNewPosition(--this.posY);
				break;
			case Rover.DirectionEast:
				this.posX = this.calculateNewPosition(++this.posX);
				break;
			case Rover.DirectionWest:
				this.posX = this.calculateNewPosition(--this.posX);
				break;
		}

		console.log(`My new position is (${this.posX}, ${this.posY}) looking at ${this.direction.toString()}`)
	}

	calculateNewPosition(position) {
		if (position + 1 > 6) {
			return 1;
		} else if (position + 1 < 2) {
			return 5;
		} else {
			return position;
		}
	}

}

// main() loop
const prompt = require("prompt-sync")({sigint: true});
let stopApp = false;
let rover = new Rover(1, 1);
while (!stopApp) {
	let instruction = prompt("Where to go ? (a/r/d/g)");
	switch (instruction) {
		case "a":
			rover.changeDirection(Rover.DirectionNorth);
			//rover.move();
			break;
		case "r":
			rover.changeDirection(Rover.DirectionSouth);
			//rover.move();
			break;
		case "d":
			rover.changeDirection(Rover.DirectionEast);
			break;
		case "g":
			rover.changeDirection(Rover.DirectionWest);
			break;
		case "m":
			rover.move();
			break;
		case "q":
			stopApp = true;
			break;
	}
}
