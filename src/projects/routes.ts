import { Router } from "express";

export function projectsRoutes(): Router {
  const router = Router();

  router.get("/v1/projects", (_, res) => {
    res.json({ data: [] });
  });

  router.post("/v1/projects", (_, res) => {
    res.json({});
  });

  router.put("/v1/projects/:id", (req, res) => {
    res.json({ id: req.params.id });
  });

  router.delete("/v1/projects/:id", (_, res) => {
    res.json({});
  });

  return router;
}
