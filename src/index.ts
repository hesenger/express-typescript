import express, { Express } from "express";
import dotenv from "dotenv";
import { log } from "./log";
import { projectsRoutes } from "./projects/routes";

dotenv.config();

const port = process.env.PORT || 3000;
const app: Express = express();

app.use("/api", projectsRoutes());

app.listen(port, () => {
  log(`[server]: Server is running at http://localhost:${port}`);
});
