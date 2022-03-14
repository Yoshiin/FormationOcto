import PasserUneReservationUseCase from "../hexagone/use-case/PasserUneReservationUseCase";
import Reservation from "../hexagone/Reservation";
import ChambreNexistePasErreur from "../hexagone/chambre/ChambreNexistePasErreur";
import ChambreHotel from "../hexagone/chambre/ChambreHotel";
import ChambreCapaciteErreur from "../hexagone/chambre/ChambreCapaciteErreur";
import PeriodeDeReservationInvalideErreur from "../hexagone/PeriodeDeReservationInvalideErreur";

class ChambreHotelFactory {
    static creer(numeroDeChambre: number = 1, etage: number = 1, capacite: number = 1) {
        return new ChambreHotel(numeroDeChambre, etage, capacite);
    }
}

describe("Passer une réservation", () => {
    const chambreHotelRepositoryStub = {
        recupererChambres: jest.fn(),
        recupererChambre: jest.fn()
    };

    const reservationRepositoryStub = {
        enregistrer: jest.fn(),
    };

    const loggerStub = {
        log: jest.fn(),
    };

    const notificationSenderStub = {
        send: jest.fn(),
    }

    const passerUneReservationUseCase = new PasserUneReservationUseCase(chambreHotelRepositoryStub, reservationRepositoryStub, loggerStub, notificationSenderStub)

    it("réserve une chambre et enregistre la réservation", () => {
        chambreHotelRepositoryStub.recupererChambre.mockReturnValue(ChambreHotelFactory.creer());
        const reservation = passerUneReservationUseCase.execute(new Date("2022-02-23"), new Date("2022-02-24"), 1, 1);
        expect(reservationRepositoryStub.enregistrer).toBeCalled();
        expect(reservation).toBeInstanceOf(Reservation);
    });

    it("quand numero de chambre n'existe pas, retourne une erreur", () => {
        chambreHotelRepositoryStub.recupererChambre.mockReturnValue(new ChambreNexistePasErreur());
        const reservation = passerUneReservationUseCase.execute(new Date("2022-02-23"), new Date("2022-02-24"), 1, 1);
        expect(reservation).toBeInstanceOf(ChambreNexistePasErreur);
    });

    it("quand le nombre de voyageur est supérieur à la capacité de la chambre, retourne une erreur", () => {
        chambreHotelRepositoryStub.recupererChambre.mockReturnValue(ChambreHotelFactory.creer());
        const reservation = passerUneReservationUseCase.execute(new Date("2022-02-23"), new Date("2022-02-24"), 1, 10);
        expect(reservation).toBeInstanceOf(ChambreCapaciteErreur);
    });

    it("quand la date de debut est superieur à la date de fin de resa, retourne une erreur", () => {
        chambreHotelRepositoryStub.recupererChambre.mockReturnValue(ChambreHotelFactory.creer());
        const reservation = passerUneReservationUseCase.execute(new Date("2023-02-23"), new Date("2022-02-24"), 1, 1);
        expect(reservation).toBeInstanceOf(PeriodeDeReservationInvalideErreur);
    });
});

// Chambre libre

