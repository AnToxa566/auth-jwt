import { body } from "express-validator";

export const authValidation = [
  body("email").notEmpty().withMessage("Email is required"),
  body("email").isEmail().withMessage("Email format is example@example.com"),
  body("password").notEmpty().withMessage("Password is required"),
  body("password")
    .isLength({ min: 8, max: 32 })
    .withMessage("Password must be between 8 and 32 characters"),
];
