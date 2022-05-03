import { Router } from "express";
import ExplorerController from "../controller/explorer_controller.js";
const router = Router();

router.get("/", async (_, res) => {
    const explorers = await ExplorerController.getAllExplorers();
    res.json(explorers);
});

router.get("/:id", async (req, res) => {
    const explorer = await ExplorerController.getById(req);
    res.json(explorer);
});

router.post("/", async (req, res) => {
    res.json(await ExplorerController.createExplorer(req));
});

export default router;
