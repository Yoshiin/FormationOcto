import ChambreHotel from "../chambre/ChambreHotel";
import ChambreHotelRepository from "../ChambreHotelRepository";

export default class ListerChambreHotelUseCase {

    constructor(private chambreHotelRepository: ChambreHotelRepository) {
    }

    public execute(): ChambreHotel[] {
        return this.chambreHotelRepository.recupererChambres();
    }
}
