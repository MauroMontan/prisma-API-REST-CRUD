import ExplorerService from "../../app/service/explorers_service.js";

describe("test suit for explorer service", () => {
    test("1) get all explorers", async () => {
        const explorers = await ExplorerService.getAllExplorers();
        expect.arrayContaining(explorers);
    });

    test("2) get explorers by id", async () => {
        const explorers = await ExplorerService.getById(5);
        expect.objectContaining(explorers);
    });
});
