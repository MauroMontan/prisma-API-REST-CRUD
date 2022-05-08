import express, { json } from "express";
import cors from "cors";
import corsOptions from "./cors/index.js";
import Config from "./config/config.js";
import { errorHandling,logger } from "./middleware/index.js";
import { ExplorerRouter, CommanderRouter } from "../app/router/index.js";

const app = express();

app.use(json());
// cors init
app.use(cors(corsOptions));

app.use(logger);
// routes
app.use("/explorers", ExplorerRouter);
app.use("/commanders", CommanderRouter);

app.get("/", async (_, res) => {
    res.send("Explorers api with Prisma :D!");
});

app.use(errorHandling);
// listener
app.listen(Config.PORT, () => {
    console.log(`listen on port: ${Config.PORT}`);
});
