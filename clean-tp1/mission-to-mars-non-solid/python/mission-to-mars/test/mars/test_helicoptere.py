from src.mars.Direction import Direction
from src.mars.Helicoptere import Helicoptere
from src.mars.ModuleMartien import ModuleMartien
from src.mars.Position import Position


class TestHelicoptere:
    sut: ModuleMartien

    def test_initialisation_atterissage(self):
        # Arrange
        sut = Helicoptere(Direction.NORD, Position(4, 4, 0))

        # Assert
        assert Position(4, 4, 0) == sut.get_position()

    def test_doit_avancer_1_case_vers_nord_si_tourne_vers_le_nord(self):
        # Arrange
        sut = Helicoptere(Direction.NORD, Position(4, 4, 1))

        # Act
        sut.avancer()

        # Assert
        assert Position(4, 5, 1) == sut.get_position()

    def test_doit_avancer_1_case_vers_sud_si_tourne_vers_le_sud(self):
        # Arrange
        sut = Helicoptere(Direction.SUD, Position(4, 4, 1))

        # Act
        sut.avancer()

        # Assert
        assert Position(4, 3, 1) == sut.get_position()

    def test_doit_avancer_1_case_vers_ouest_si_tourne_vers_louest(self):
        # Arrange
        sut = Helicoptere(Direction.OUEST, Position(4, 4, 1))

        # Act
        sut.avancer()

        # Assert
        assert Position(3, 4, 1) == sut.get_position()

    def test_doit_reculer_1_case_vers_sud_si_tourne_vers_le_nord(self):
        # Arrange
        sut = Helicoptere(Direction.NORD, Position(4, 4, 1))

        # Act
        sut.reculer()

        # Assert
        assert Position(4, 3, 1) == sut.get_position()

    def test_doit_reculer_1_case_vers_nord_si_tourne_vers_le_sud(self):
        # Arrange
        sut = Helicoptere(Direction.SUD, Position(4, 4, 1))

        # Act
        sut.reculer()

        # Assert
        assert Position(4, 5, 1) == sut.get_position()

    def test_doit_reculer_1_case_vers_est_si_tourne_vers_louest(self):
        # Arrange
        sut = Helicoptere(Direction.OUEST, Position(4, 4, 1))

        # Act
        sut.reculer()

        # Assert
        assert Position(5, 4, 1) == sut.get_position()

    def test_doit_reculer_1_case_vers_ouest_si_tourne_vers_lest(self):
        # Arrange
        sut = Helicoptere(Direction.EST, Position(4, 4, 1))

        # Act
        sut.reculer()

        # Assert
        assert Position(3, 4, 1) == sut.get_position()

    def test_doit_monter_1_case_vers_le_haut(self):
        # Arrange
        sut = Helicoptere(Direction.NORD, Position(4, 4, 0))

        # Act
        sut.monter()

        # Assert
        assert Position(4, 4, 1) == sut.get_position()

    def test_doit_descendre_1_case_vers_le_bas(self):
        # Arrange
        sut = Helicoptere(Direction.SUD, Position(4, 4, 3))

        # Act
        sut.descendre()

        # Assert
        assert Position(4, 4, 2) == sut.get_position()
