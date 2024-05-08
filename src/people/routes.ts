import { Router } from "express";

export function peopleRoutes(): Router {
  const router = Router();

  router.get("/v1/people", (_, res) => {
    res.json({ data: [] });
  });

  router.post("/v1/people", (_, res) => {
    res.json({});
  });

  router.put("/v1/people/:id", (req, res) => {
    res.json({ id: req.params.id });
  });

  router.delete("/v1/people/:id", (_, res) => {
    res.json({});
  });

  return router;
}
