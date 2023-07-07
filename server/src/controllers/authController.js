import { validationResult } from "express-validator";
import UserDTO from "../dtos/userDto.js";
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

  static deleteRefreshTokenFromCookie(res) {
    res.cookie("refreshToken", "", { expires: new Date(0) });
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

  async logout(req, res, next) {
    try {
      await authService.logout(req.user.id);

      AuthController.deleteRefreshTokenFromCookie(res);

      return res.json();
    } catch (err) {
      next(err);
    }
  }

  async check(req, res, next) {
    try {
      return res.json({
        user: { ...new UserDTO(req.user) },
      });
    } catch (err) {
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const userData = await authService.refresh(req.cookies.refreshToken);

      AuthController.setRefreshTokenInCookie(res, userData.refreshToken);

      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

const authController = new AuthController();

export default authController;
