import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import userController from "../controllers/userController.js";

const router = new Router();

router.get("/", authMiddleware, userController.getAll);

export default router;
