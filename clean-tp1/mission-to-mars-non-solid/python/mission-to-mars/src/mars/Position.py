class Position:

    def __init__(self, x: int, y: int, z: int):
        self.x = x
        self.y = y
        self.z = z

    def __eq__(self, other: object) -> bool:
        if isinstance(other, Position):
            return self.x == other.x and self.y == other.y and self.z == other.z
        return False
