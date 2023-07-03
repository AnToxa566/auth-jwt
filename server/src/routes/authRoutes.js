import { Router } from "express";
import { authValidation } from "../validations/authValid.js";
import authController from "../controllers/authController.js";

const router = new Router();

router.get("/refresh", authController.refresh);

router.post("/login", authValidation, authController.login);

router.post("/registration", authValidation, authController.registration);

export default router;
