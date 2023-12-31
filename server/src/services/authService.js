import bcrypt from "bcrypt";
import { User } from "../db/index.js";
import UserDTO from "../dtos/userDto.js";
import tokenService from "./tokenService.js";
import ApiException from "../exceptions/apiException.js";

class AuthService {
  generateUserData(user) {
    const userDto = new UserDTO(user);
    const userPayload = { ...userDto };

    const accessToken = tokenService.generateAccessToken(userPayload, "30m");
    const refreshToken = tokenService.generateRefreshToken(userPayload, "30d");

    return {
      user: userPayload,
      accessToken,
      refreshToken,
    };
  }

  async login(request) {
    const { email, password } = request;
    const candidate = await User.findOne({ where: { email } });

    if (!candidate) {
      throw ApiException.badRequest("User with this email was not found");
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      candidate.password
    );

    if (!isCorrectPassword) {
      throw ApiException.badRequest("Invalid password");
    }

    const userData = this.generateUserData(candidate);

    await tokenService.storeRefreshToken(
      userData.refreshToken,
      userData.user.id
    );

    return userData;
  }

  async registration(request) {
    const { email, password } = request;
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApiException.badRequest("User already exists");
    }

    const hash = await bcrypt.hash(password, 5);
    const createdUser = await User.create({ email, password: hash });

    const userData = this.generateUserData(createdUser);

    await tokenService.storeRefreshToken(
      userData.refreshToken,
      userData.user.id
    );

    return userData;
  }

  async logout(userId) {
    await tokenService.deleteRefreshTokens(userId);

    return true;
  }

  async refresh(refreshToken) {
    const newTokens = await tokenService.refresh(refreshToken);

    const userPayload = tokenService.verifyAccessToken(newTokens.accessToken);
    const userDto = new UserDTO(userPayload);

    return {
      user: { ...userDto },
      ...newTokens,
    };
  }
}

const authService = new AuthService();

export default authService;
