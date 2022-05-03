import express, { json } from "express";
import Config from "./config/config.js";
import Explorers from "../app/routes/explorer_routes.js";
const app = express();

app.use(json());
app.use("/explorers", Explorers);

app.get("/", async (_, res) => {
    res.send("Explorers api with Prisma :D!");
});

app.listen(Config.PORT, () => {
    console.log(`listen on port: ${Config.PORT}`);
});
