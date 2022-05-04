import { Router } from "express";
import { CommanderController } from "../controller/index.js";

const router = Router();

router.get("/", async (_, res) => {
    res.json(await CommanderController.getAllExplorers());
});

router.get("/:id", async (req, res) => {
    res.json(await CommanderController.getById(req));
});

router.post("/", async (req, res) => {
    const newCommander = await CommanderController.createCommander(req);
    res.json(newCommander);
});

router.put("/:id", async (req, res) => {
    const updatedCommader = CommanderController.updateCommander(req);

    res.json(await updatedCommader);
});
router.delete("/:id", async (req, res) => {
    const deletedCommander = CommanderController.deleteCommander(req);

    res.json(await deletedCommander);
});

export default router;
