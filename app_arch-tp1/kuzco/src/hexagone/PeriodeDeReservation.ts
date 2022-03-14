import PeriodeDeReservationInvalideErreur from "./PeriodeDeReservationInvalideErreur";

export default class PeriodeDeReservation {
    private constructor(
        private dateDeDebut: Date,
        private dateDeFin: Date
    ) {}

    static creer(
        dateDeDebut: Date,
        dateDeFin: Date
    ): PeriodeDeReservation | PeriodeDeReservationInvalideErreur {

        if (dateDeDebut > dateDeFin) {
            return new PeriodeDeReservationInvalideErreur()
        }
        return new PeriodeDeReservation(dateDeDebut, dateDeFin)
    }
}

