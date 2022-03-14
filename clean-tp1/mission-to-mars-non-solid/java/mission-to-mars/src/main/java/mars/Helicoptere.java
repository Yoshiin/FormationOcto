package mars;

import java.util.stream.IntStream;

public class Helicoptere extends Vehicule implements ModuleVolant {
	public Helicoptere(Direction direction, Position position) {
		super(direction, position);
	}

	public void monter() {
		position = new Position(position.getX(), position.getY(), position.getZ() + 1);
	}

	public void descendre() {
		position = new Position(position.getX(), position.getY(), position.getZ() - 1);
	}

	private void atterir() {
		int altitude = position.getZ();
		IntStream.range(0, altitude).forEach((i -> descendre()));
	}

	@Override
	public void activerRecuperation() {
		atterir();
		super.activerRecuperation();
	}

}
