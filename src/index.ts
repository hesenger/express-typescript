import express, { Express } from "express";
import dotenv from "dotenv";
import { log, logProduction } from "./log";
import { projectsRoutes } from "./projects/routes";
import { peopleRoutes } from "./people/routes";

dotenv.config();

const env = process.env.ENV;
const port = process.env.PORT || 3000;
const app: Express = express();

app.use("/api", projectsRoutes());
app.use("/api", peopleRoutes());

app.listen(port, () => {
  logProduction(`[server]: Environment = ${env}`);
  logProduction(`[server]: Server is running at http://localhost:${port}`);
});
