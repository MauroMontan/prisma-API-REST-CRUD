import { CommanderService } from "../service/index.js";
import { Commander } from "../models/index.js";
class CommanderController {
    static getAllExplorers = async () =>
        await CommanderService.getAllCommanders();

    static async getById(req) {
        const id = parseInt(req.params.id);
        return await CommanderService.getById(id);
    }

    static async createCommander(req) {
        const newCommander = new Commander(req.body);
        return await CommanderService.createCommander(newCommander);
    }
    static async updateCommander(req) {
        const id = parseInt(req.params.id);
        const updatedCommader = new Commander(req.body);

        return await CommanderService.updateCommander(id, updatedCommader);
    }

    static async deleteCommander(req) {
        const id = parseInt(req.params.id);

        return CommanderService.deleteCommander(id);
    }
}

export default CommanderController;
