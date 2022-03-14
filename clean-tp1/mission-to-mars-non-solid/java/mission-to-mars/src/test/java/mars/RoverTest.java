package mars;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RoverTest {

	ModuleMartien sut;

	@Test
	void initialisationAtterissage() {
		// Arrange
		sut = new Rover(Direction.NORD, new Position(4, 4, 0));

		// Assert
		assertEquals(new Position(4, 4, 0), sut.getPosition());
	}

	@Test
	void doitAvancer1CaseVersNordSiTourneVersLeNord() {
		// Arrange
		sut = new Rover(Direction.NORD, new Position(4, 4, 0));

		// Act
		sut.avancer();

		// Assert
		assertEquals(new Position(4, 5, 0), sut.getPosition());
	}

	@Test
	void doitAvancer1CaseVersSudSiTourneVersLeSud() {
		// Arrange
		sut = new Rover(Direction.SUD, new Position(4, 4, 0));

		// Act
		sut.avancer();

		// Assert
		assertEquals(new Position(4, 3, 0), sut.getPosition());
	}

	@Test
	void doitAvancer1CaseVersOuestSiTourneVersLOuest() {
		// Arrange
		sut = new Rover(Direction.OUEST, new Position(4, 4, 0));

		// Act
		sut.avancer();

		// Assert
		assertEquals(new Position(3, 4, 0), sut.getPosition());
	}

	@Test
	void doitAvancer1CaseVersEstSiTourneVersLEst() {
		// Arrange
		sut = new Rover(Direction.EST, new Position(4, 4, 0));

		// Act
		sut.avancer();

		// Assert
		assertEquals(new Position(5, 4, 0), sut.getPosition());
	}

	@Test
	void doitReculer1CaseVersSudSiTourneVersLeNord() {
		// Arrange
		sut = new Rover(Direction.NORD, new Position(4, 4, 0));

		// Act
		sut.reculer();

		// Assert
		assertEquals(new Position(4, 3, 0), sut.getPosition());
	}

	@Test
	void doitReculer1CaseVersNordSiTourneVersLeSud() {
		// Arrange
		sut = new Rover(Direction.SUD, new Position(4, 4, 0));

		// Act
		sut.reculer();

		// Assert
		assertEquals(new Position(4, 5, 0), sut.getPosition());
	}

	@Test
	void doitReculer1CaseVersEstSiTourneVersLOuest() {
		// Arrange
		sut = new Rover(Direction.OUEST, new Position(4, 4, 0));

		// Act
		sut.reculer();

		// Assert
		assertEquals(new Position(5, 4, 0), sut.getPosition());
	}

	@Test
	void doitReculer1CaseVersOuestSiTourneVersLEst() {
		// Arrange
		sut = new Rover(Direction.EST, new Position(4, 4, 0));

		// Act
		sut.reculer();

		// Assert
		assertEquals(new Position(3, 4, 0), sut.getPosition());
	}

	@Test
	void neDoitPasMonter() {
		// Arrange
		sut = new Rover(Direction.NORD, new Position(4, 4, 0));

		// Act + Assert
		assertThrows(UnsupportedOperationException.class, () -> sut.monter());
	}

	@Test
	void neDoitPasDescendre() {
		// Arrange
		sut = new Rover(Direction.SUD, new Position(4, 4, 3));

		// Act + Assert
		assertThrows(UnsupportedOperationException.class, () -> sut.descendre());
	}

}
