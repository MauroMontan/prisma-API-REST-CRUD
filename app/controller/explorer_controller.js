import { ExplorerService } from "../service/index.js";
import { Explorer } from "../models/index.js";

class ExplorerController {
    static getAllExplorers = async () =>
        await ExplorerService.getAllExplorers();

    static async getById(req) {
        const id = req.params.id;
        return await ExplorerService.getById(id);
    }

    static async createExplorer(req, next) {
        try {
            const newExplorer = new Explorer(req.body);
            return await ExplorerService.creatExplorer(newExplorer);
        } catch (error) {
            if (error.code === "P2002") {
                next(new Error("explorer already exists"));
            }
        }
    }
    static async updateExplorer(req) {
        const id = parseInt(req.params.id);
        const updatedExplorer = new Explorer(req.body);

        return await ExplorerService.updateExplorer(id, updatedExplorer);
    }

    static async deleteExplorer(req) {
        const id = parseInt(req.params.id);

        return ExplorerService.deleteExplorer(id);
    }
}

export default ExplorerController;
