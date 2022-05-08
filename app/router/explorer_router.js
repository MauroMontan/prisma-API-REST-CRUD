import { Router } from "express";
import { ExplorerController } from "../controller/index.js";
const router = Router();

router.get("/", async (_, res) => {
    const explorers = await ExplorerController.getAllExplorers();
    res.json(explorers);
});

router.get("/:id", async (req, res) => {
    const explorer = await ExplorerController.getById(req);
    res.json(explorer);
});

router.post("/", async (req, res, next) => {
    res.json(await ExplorerController.createExplorer(req,next));
});

router.put("/:id", async (req, res) => {
    return res.json(await ExplorerController.updateExplorer(req));
});

router.delete("/:id", async (req, res) => {
    return res.json(await ExplorerController.deleteExplorer(req));
});

export default router;
