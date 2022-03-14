from src.mars.Helicoptere import Helicoptere
from src.mars.ModuleMartien import ModuleMartien


class Sonde:

    def preparer_recuperation(self, module_martien: ModuleMartien) -> None:
        if isinstance(module_martien, Helicoptere):
            self._poser_helicoptere(module_martien)
        module_martien.activer_recuperation()

    def _poser_helicoptere(self, module_martien: ModuleMartien) -> None:
        altitude = module_martien.get_position().z
        self._atterir(module_martien, altitude)

    def _atterir(self, module_martien: ModuleMartien, altitude: int) -> None:
        for i in range(altitude):
            module_martien.descendre()
