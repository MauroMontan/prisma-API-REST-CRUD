import { prisma } from "../prisma/index.js";

class ExplorerService {
    static getAllExplorers = async () => await prisma.explorer.findMany({});

    static getById = async (id) =>
        await prisma.explorer.findUnique({ where: { id: parseInt(id) } });

    static async creatExplorer(explorer) {
        const newExplorer = await prisma.explorer.create({ data: explorer });

        return { user: newExplorer, message: "user created" };
    }

    static async updateExplorer(id, payload) {
        const updateExplorer = await prisma.explorer.update({
            where: {
                id: id,
            },
            data: payload,
        });

        return updateExplorer;
    }

    static async deleteExplorer(id) {
        const removedExplorer = await prisma.explorer.delete({
            where: { id: id },
        });

        return removedExplorer;
    }
}

export default ExplorerService;
