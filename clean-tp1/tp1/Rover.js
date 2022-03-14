export default class Rover {
	static DirectionNorth = Symbol("North");
	static DirectionSouth = Symbol("South");
	static DirectionEast = Symbol("East");
	static DirectionWest = Symbol("West");

	constructor(x, y) {
		this.posX = x;
		this.posY = y;
		this.direction = Rover.DirectionNorth;
	}

	move(direction) {
		switch (direction) {
			case Rover.DirectionNorth:
				this.posY = this.setPosition(this.posY++);
				break;
			case Rover.DirectionSouth:
				this.posY = this.setPosition(this.posY--);
				break;
			case Rover.DirectionEast:
				this.posX = this.setPosition(this.posX++);
				break;
			case Rover.DirectionWest:
				this.posX = this.setPosition(this.posX--);
				break;
		}

		console.log(`My new position is (${this.posX}, ${this.posY})`)
	}

	setPosition(position) {
		//return (position - 1 % 4) + 1;
		if (position + 1 > 5) {
			return 1;
		} else if (position + 1 < 1) {
			return 5;
		} else {
			return position;
		}
	}

}
