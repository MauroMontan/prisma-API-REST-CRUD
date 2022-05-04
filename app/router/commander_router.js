import { Router } from "express";
import { CommanderController } from "../controller/index.js";

const router = Router();

router.get("/", async (_, res) => {
    res.json(await CommanderController.getAllExplorers());
});

router.get("/:id", (req, res) => {});

router.post("/", async (req, res) => {
    const newCommander = await CommanderController.createCommander(req);
    res.json(newCommander);
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;
