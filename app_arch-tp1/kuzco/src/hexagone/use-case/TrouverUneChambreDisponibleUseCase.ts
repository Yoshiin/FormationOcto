import PeriodeDeReservation from "../PeriodeDeReservation";

export default class TrouverUneChambreDisponibleUseCase {
    public constructor() {
    }

    public execute(dateDeDebut: Date, dateDeFin: Date, nombreDeVoyageur: number) {
        const periode = PeriodeDeReservation.creer(dateDeDebut, dateDeFin);
        /**
         *
         * const chambres[] = ChambreRepository.recupererChambresDisponibles(periode, nombreDeVoyageur)
         *
         */

    }
}
