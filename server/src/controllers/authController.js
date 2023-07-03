import { validationResult } from "express-validator";
import authService from "../services/authService.js";
import ApiException from "../exceptions/apiException.js";

class AuthController {
  // TODO: Set refresh token in cookie

  async login(req, res, next) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        throw ApiException.badRequest(result.array()[0].msg);
      }

      const { email, password } = req.body;
      const userData = await authService.login(email, password);

      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  async registration(req, res, next) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        throw ApiException.badRequest(result.array()[0].msg);
      }

      const { email, password } = req.body;
      const userData = await authService.registration(email, password);

      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

const authController = new AuthController();

export default authController;
