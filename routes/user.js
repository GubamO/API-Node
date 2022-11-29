import express from "express";
const router = express.Router()

import { userController } from "../controllers";

router.get("/", userController.getAll);
router.get("/:id", userController.get);
router.get("/", userController.create);
router.get("/:id", userController.update);
router.get("/:id", userController.delete);

export default router;