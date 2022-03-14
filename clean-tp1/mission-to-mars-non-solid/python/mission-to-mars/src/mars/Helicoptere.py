from src.mars.Direction import Direction
from src.mars.ModuleMartien import ModuleMartien
from src.mars.Position import Position
from src.mars.Rover import Rover


class Helicoptere(Rover, ModuleMartien):

    def __init__(self, direction: Direction, position: Position):
        super().__init__(direction, position)

    def monter(self) -> None:
        self.position = Position(self.position.x, self.position.y, self.position.z + 1)

    def descendre(self) -> None:
        self.position = Position(self.position.x, self.position.y, self.position.z - 1)
