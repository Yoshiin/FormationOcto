import Reservation from "./Reservation";

export default interface ReservationRepository{

    enregistrer(reservation: Reservation): void

}
