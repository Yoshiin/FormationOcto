import Evenement from "./Evenement";
import Reservation from "./Reservation";

export default class ReservationPasseEvenement extends Evenement {
    constructor(reservation: Reservation) {
        super();
    }

    getName(): string {
        return "RESERVATION_PASSE";
    }
}
