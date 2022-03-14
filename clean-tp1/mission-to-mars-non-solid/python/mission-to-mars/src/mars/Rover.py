from src.mars.Direction import Direction
from src.mars.ModuleMartien import ModuleMartien
from src.mars.Position import Position


class Rover(ModuleMartien):

    def __init__(self, direction: Direction, position: Position):
        self._direction = direction
        self.position = position
        self._pret_pour_recuperation: bool = False

    def get_position(self) -> Position:
        return self.position

    def is_pret_pour_recuperation(self) -> bool:
        return self._pret_pour_recuperation

    def avancer(self) -> None:
        if self._direction == Direction.NORD:
            self.position = Position(self.position.x, self.position.y + 1, self.position.z)
        elif self._direction == Direction.SUD:
            self.position = Position(self.position.x, self.position.y - 1, self.position.z)
        elif self._direction == Direction.OUEST:
            self.position = Position(self.position.x - 1, self.position.y, self.position.z)
        else:
            self.position = Position(self.position.x + 1, self.position.y, self.position.z)

    def reculer(self) -> None:
        if self._direction == Direction.NORD:
            self.position = Position(self.position.x, self.position.y - 1, self.position.z)
        elif self._direction == Direction.SUD:
            self.position = Position(self.position.x, self.position.y + 1, self.position.z)
        elif self._direction == Direction.OUEST:
            self.position = Position(self.position.x + 1, self.position.y, self.position.z)
        else:
            self.position = Position(self.position.x - 1, self.position.y, self.position.z)

    def monter(self) -> None:
        raise NotImplementedError("Un rover ne vole pas")

    def descendre(self) -> None:
        raise NotImplementedError("Un rover ne vole pas")

    def activer_recuperation(self) -> None:
        self._pret_pour_recuperation = True
