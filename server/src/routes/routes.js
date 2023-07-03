import { Router } from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";

const router = new Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
