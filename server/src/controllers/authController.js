import { validationResult } from "express-validator";
import authService from "../services/authService.js";
import ApiException from "../exceptions/apiException.js";

class AuthController {
  static validationRequest(req) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      throw ApiException.badRequest(result.array()[0].msg);
    }
  }

  static setRefreshTokenInCookie(res, refreshToken) {
    res.cookie("refreshToken", refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  }

  async login(req, res, next) {
    try {
      AuthController.validationRequest(req);

      const userData = await authService.login(req.body);

      AuthController.setRefreshTokenInCookie(res, userData.refreshToken);

      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  async registration(req, res, next) {
    try {
      AuthController.validationRequest(req);

      const userData = await authService.registration(req.body);

      AuthController.setRefreshTokenInCookie(res, userData.refreshToken);

      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  refresh(req, res, next) {
    try {
      const userData = authService.refresh(req.cookies.refreshToken);

      AuthController.setRefreshTokenInCookie(res, userData.refreshToken);

      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

const authController = new AuthController();

export default authController;
