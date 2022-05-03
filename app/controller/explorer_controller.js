import ExplorerService from "../service/explorers_service.js";
import Explorer from "../models/explorer_model.js";

class ExplorerController {
    static getAllExplorers = async () =>
        await ExplorerService.getAllExplorers();

    static async getById(req) {
        const id = req.params.id;
        return await ExplorerService.getById(id);
    }

    static async createExplorer(req) {
        const newExplorer = new Explorer(req.body);
        return await ExplorerService.creatExplorer(newExplorer);
    }
}

export default ExplorerController;
