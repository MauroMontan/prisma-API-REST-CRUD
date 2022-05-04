import express, { json } from "express";
import Config from "./config/config.js";
import { ExplorerRouter, CommanderRouter } from "../app/router/index.js";
const app = express();

app.use(json());
app.use("/explorers", ExplorerRouter);
app.use("/commanders", CommanderRouter);

app.get("/", async (_, res) => {
    res.send("Explorers api with Prisma :D!");
});

app.listen(Config.PORT, () => {
    console.log(`listen on port: ${Config.PORT}`);
});
