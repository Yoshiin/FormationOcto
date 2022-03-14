import Reservation from "../Reservation";

export default class ChambreHotel {

    constructor(
        public numeroDeChambre: number,
        public etage: number,
        public capacite: number,
    ) {}

    capaciteAtteinte(nombreDeVoyageur) {
        return nombreDeVoyageur > this.capacite;
    }
}
