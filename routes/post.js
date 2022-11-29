import express from "express";
const router = express.Router()

import { postController } from "../controllers";

router.get("/", postController.getAll);
router.get("/:id", postController.get);
router.get("/", postController.create);
router.get("/:id", postController.update);
router.get("/:id", postController.delete);

export default router;