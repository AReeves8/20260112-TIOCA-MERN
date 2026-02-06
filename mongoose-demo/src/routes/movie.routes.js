import { Router } from "express";
import { MovieController } from "../controllers/movie.controller.js";

const router = Router();

// base endpoint: /api/movies
router.get("/", MovieController.getAll);
router.get("/:rating", MovieController.getAllWithMinRating);
router.get("/directors", MovieController.getAllWithDirectors);
router.get("/directors/:id", MovieController.getAllByDirector);
router.post("/", MovieController.createNewMovie);

export default router;