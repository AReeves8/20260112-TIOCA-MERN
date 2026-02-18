import express from 'express';
import * as controller from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteById);

export default router;