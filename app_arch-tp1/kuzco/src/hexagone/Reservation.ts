import ChambreHotel from "./chambre/ChambreHotel";
import ChambreCapaciteErreur from "./chambre/ChambreCapaciteErreur";
import PeriodeDeReservation from "./PeriodeDeReservation";
import Evenement from "./Evenement";
import ReservationPasseEvenement from "./ReservationPasseEvenement";

export default class Reservation {
    public evenements: Evenement[];

    private constructor(
        private periode: PeriodeDeReservation,
        private chambre: ChambreHotel,
        private nombreDeVoyageurs: number
    ) {
        this.evenements = [];
    }

    static creer(
                periode: PeriodeDeReservation,
                chambre: ChambreHotel,
                nombreDeVoyageurs: number
    ): Reservation | ChambreCapaciteErreur
    {
        if (chambre.capaciteAtteinte(nombreDeVoyageurs)) {
            return new ChambreCapaciteErreur();
        }
        const reservation = new Reservation(periode, chambre, nombreDeVoyageurs);
        reservation.evenements.push(new ReservationPasseEvenement(reservation));
        return reservation;
    }
}
