import { Router } from "express";
import { DirectorController } from "../controllers/director.controller.js";

const router = Router();

// base endpoint: /api/directors
router.get("/", DirectorController.getAll);

export default router;