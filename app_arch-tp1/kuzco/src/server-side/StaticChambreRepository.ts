import ChambreHotel from "../hexagone/chambre/ChambreHotel";
import ChambreHotelRepository from "../hexagone/ChambreHotelRepository";
import ChambreNexistePasErreur from "../hexagone/chambre/ChambreNexistePasErreur";

export default class StaticChambreRepository implements ChambreHotelRepository {
    recupererChambres() {
        return [new ChambreHotel(1, 1, 1)]
    }

    recupererChambre(numeroDeChambre: number): ChambreHotel | ChambreNexistePasErreur {
        return new ChambreNexistePasErreur();
    }
}
