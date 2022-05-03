import express, { json } from "express";
import Config from "./config/config.js";
import Explorers from "../app/routes/explorer_routes.js";
import { prisma } from "./prisma/index.js";
const app = express();

app.use(json());
app.use("/explorers", Explorers);

app.get("/", async (_, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.listen(Config.PORT, () => {
    console.log(`listen on port: ${Config.PORT}`);
});
