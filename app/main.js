import express, { json } from "express";
import cors from "cors";
import Config from "./config/config.js";
import { ExplorerRouter, CommanderRouter } from "../app/router/index.js";
const app = express();


app.use(json());

const corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));

app.use("/explorers", ExplorerRouter);
app.use("/commanders", CommanderRouter);

app.get("/", async (_, res) => {
    res.send("Explorers api with Prisma :D!");
});

app.listen(Config.PORT, () => {
    console.log(`listen on port: ${Config.PORT}`);
});
