import { prisma } from "../prisma/index.js";

class ExplorerService {
    static getAllExplorers = async () => await prisma.explorer.findMany({});

    static getById = async (id) =>
        await prisma.explorer.findUnique({ where: { id: parseInt(id) } });

    static async creatExplorer(explorer) {
        const newExplorer = await prisma.explorer.create({ data: explorer });

        return { user: newExplorer, message: "user created" };
    }
}

export default ExplorerService;
