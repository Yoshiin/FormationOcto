import StaticChambreRepository from "../server-side/StaticChambreRepository";
import ListerChambreHotelUseCase from "../hexagone/use-case/ListerChambreHotelUseCase";

describe("Récupérer la liste des chambres d'hôtel", () => {
    it("Should renvoyer la liste des chambres d'hôtel", () => {
        const listeDesChambres = new ListerChambreHotelUseCase(new StaticChambreRepository()).execute();
        expect(listeDesChambres.length).toStrictEqual(1);
    })
});
