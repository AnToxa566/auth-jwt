import jwt from "jsonwebtoken";
import UserDTO from "../dtos/userDto.js";
import { User, RefreshToken } from "../db/index.js";
import ApiException from "../exceptions/apiException.js";

class TokenService {
  generateAccessToken(payload, expiresIn) {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn });
  }

  generateRefreshToken(payload, expiresIn) {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn });
  }

  verifyAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (error) {
      return null;
    }
  }

  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (error) {
      return null;
    }
  }

  async validCreateAndUpdateData(refreshToken, userId) {
    const candidate = await User.findOne({ where: { id: userId } });

    if (!candidate) {
      throw ApiException.internalServerError("Couldn't find the user");
    }

    const decoded = this.verifyRefreshToken(refreshToken);

    if (!decoded) {
      throw ApiException.internalServerError("Refresh token isn't valid");
    }
  }

  async storeRefreshToken(refreshToken, userId) {
    await this.validCreateAndUpdateData(refreshToken, userId);

    const storedRefreshToken = await RefreshToken.create({
      refreshToken,
      userId,
    });

    return storedRefreshToken;
  }

  async updateRefreshToken(refreshToken, userId) {
    await this.validCreateAndUpdateData(refreshToken, userId);

    const candidate = await RefreshToken.findOne({ where: { userId } });

    if (!candidate) {
      throw ApiException.internalServerError("Couldn't find the refresh token");
    }

    const updatedRefreshToken = await candidate.update({ refreshToken });

    return updatedRefreshToken;
  }

  async deleteRefreshTokens(userId) {
    const isDestroyed = await RefreshToken.destroy({ where: { userId } });

    if (!isDestroyed) {
      throw ApiException.unauthorized("User is not authorized");
    }

    return true;
  }

  async refresh(refreshToken) {
    const candidate = await RefreshToken.findOne({ where: { refreshToken } });

    if (!candidate) {
      throw ApiException.unauthorized("User is not authorized");
    }

    const payload = this.verifyRefreshToken(refreshToken);

    if (!payload) {
      throw ApiException.unauthorized("User is not authorized");
    }

    const userPayload = { ...new UserDTO(payload) };

    const newAccessToken = this.generateAccessToken(userPayload, "30m");
    const newRefreshToken = this.generateRefreshToken(userPayload, "30d");

    await this.updateRefreshToken(newRefreshToken, userPayload.id);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }
}

const tokenService = new TokenService();

export default tokenService;
