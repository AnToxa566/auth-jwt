import { Router } from "express";
import { authValidation } from "../validations/authValid.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authController from "../controllers/authController.js";

const router = new Router();

router.get("/refresh", authController.refresh);

router.get("/check", authMiddleware, authController.check);

router.get("/logout", authMiddleware, authController.logout);

router.post("/login", authValidation, authController.login);

router.post("/registration", authValidation, authController.registration);

export default router;
