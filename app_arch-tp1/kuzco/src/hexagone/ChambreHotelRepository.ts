import ChambreHotel from "./chambre/ChambreHotel";
import ChambreNexistePasErreur from "./chambre/ChambreNexistePasErreur";

export default interface ChambreHotelRepository {
    recupererChambres():  ChambreHotel[];
    recupererChambre(numeroDeChambre: number):  ChambreHotel | ChambreNexistePasErreur;
}
