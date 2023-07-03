import jwt from "jsonwebtoken";
import UserDTO from "../dtos/userDto.js";

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

  refresh(refreshToken) {
    const payload = this.verifyRefreshToken(refreshToken);

    if (!payload) {
      return null;
    }

    const userDto = new UserDTO(payload);
    const userPayload = { ...userDto };

    const newAccessToken = this.generateAccessToken(userPayload, "30m");
    const newRefreshToken = this.generateRefreshToken(userPayload, "30d");

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }
}

const tokenService = new TokenService();

export default tokenService;
