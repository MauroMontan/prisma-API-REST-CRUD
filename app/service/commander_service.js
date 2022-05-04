import { prisma } from "../prisma/index.js";

class CommanderService {
    static getAllCommanders = async () => await prisma.commander.findMany({});

    static getById = async (id) =>
        await prisma.commander.findUnique({ where: { id: parseInt(id) } });

    static async createCommander(explorer) {
        const newExplorer = await prisma.commander.create({ data: explorer });

        return { commander: newExplorer, message: "user created" };
    }

    static async updateCommander(id, payload) {
        const updateExplorer = await prisma.commander.update({
            where: {
                id: id,
            },
            data: payload,
        });

        return updateExplorer;
    }

    static async deleteCommander(id) {
        const removedExplorer = await prisma.commander.delete({
            where: { id: id },
        });

        return removedExplorer;
    }
}

export default CommanderService;
