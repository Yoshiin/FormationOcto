import abc

from src.mars.Position import Position


class ModuleMartien(abc.ABC):

    @abc.abstractmethod
    def get_position(self) -> Position:
        pass

    @abc.abstractmethod
    def avancer(self) -> None:
        pass

    @abc.abstractmethod
    def reculer(self) -> None:
        pass

    @abc.abstractmethod
    def monter(self) -> None:
        pass

    @abc.abstractmethod
    def descendre(self) -> None:
        pass

    @abc.abstractmethod
    def activer_recuperation(self) -> None:
        pass

    @abc.abstractmethod
    def is_pret_pour_recuperation(self) -> bool:
        pass
