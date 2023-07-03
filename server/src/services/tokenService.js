import jwt from "jsonwebtoken";

class TokenService {
  // TODO: Refresh tokens

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
}

const tokenService = new TokenService();

export default tokenService;
