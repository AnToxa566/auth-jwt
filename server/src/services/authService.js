import bcrypt from "bcrypt";
import { User } from "../db/index.js";
import UserDTO from "../dtos/userDto.js";
import tokenService from "./tokenService.js";
import ApiException from "../exceptions/apiException.js";

class AuthService {
  getUserData(user) {
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

    const userData = this.getUserData(candidate);

    await tokenService.updateRefreshToken(
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

    const userData = this.getUserData(createdUser);

    await tokenService.storeRefreshToken(
      userData.refreshToken,
      userData.user.id
    );

    return userData;
  }

  async refresh(refreshToken) {
    const newTokens = await tokenService.refresh(refreshToken);

    if (!newTokens) {
      throw ApiException.unauthorized("User is not authorized");
    }

    const userPayload = tokenService.verifyAccessToken(newTokens.accessToken);
    const userDto = new UserDTO(userPayload);

    await tokenService.updateRefreshToken(
      newTokens.refreshToken,
      userPayload.id
    );

    return {
      user: { ...userDto },
      ...newTokens,
    };
  }
}

const authService = new AuthService();

export default authService;
