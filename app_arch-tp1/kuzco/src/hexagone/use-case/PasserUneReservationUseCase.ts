import ChambreHotelRepository from "../ChambreHotelRepository";
import ReservationRepository from "../ReservationRepository";
import Logger from "../Logger";
import NotificationSender from "../NotificationSender";
import Reservation from "../Reservation";
import ChambreNexistePasErreur from "../chambre/ChambreNexistePasErreur";
import ChambreCapaciteErreur from "../chambre/ChambreCapaciteErreur";
import PeriodeDeReservation from "../PeriodeDeReservation";
import PeriodeDeReservationInvalideErreur from "../PeriodeDeReservationInvalideErreur";
import ReservationPasseEvenement from "../ReservationPasseEvenement";

export default class PasserUneReservationUseCase {
    constructor(private chambreHotelRepository: ChambreHotelRepository,
                private reservationRepository: ReservationRepository,
                private eventPublisher: EventPublisher,
                ) {
    }

    public execute(dateDeDebut: Date, dateDeFin: Date, numeroDeChambre: number, nombreDeVoyageurs: number): Reservation | ChambreNexistePasErreur | ChambreCapaciteErreur {
        const chambreOuErreur = this.chambreHotelRepository.recupererChambre(numeroDeChambre);
        if (chambreOuErreur instanceof ChambreNexistePasErreur) {
            return chambreOuErreur;
        }

        const periode = PeriodeDeReservation.creer(dateDeDebut, dateDeFin);
        if (periode instanceof PeriodeDeReservationInvalideErreur) {
            return periode;
        }

        const reservation = Reservation.creer(periode, chambreOuErreur, nombreDeVoyageurs);
        if (reservation instanceof ChambreCapaciteErreur) {
            return reservation;
        }
        this.reservationRepository.enregistrer(reservation);
        this.eventPublisher.publish(reservation.evenements);
        /*this.logger.log("Chambre réservé !");
        this.notificationSender.send("OK");*/

        return reservation;
    }
}
