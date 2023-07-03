import { Router } from "express";
import authRoutes from "./authRoutes.js";

const router = new Router();

router.use("/auth", authRoutes);

export default router;
