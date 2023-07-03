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
      throw ApiException.badRequest("Invalid email");
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      candidate.password
    );

    if (!isCorrectPassword) {
      throw ApiException.badRequest("Invalid password");
    }

    return this.getUserData(candidate);
  }

  async registration(request) {
    const { email, password } = request;
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApiException.badRequest("User already exists");
    }

    const hash = await bcrypt.hash(password, 5);
    const createdUser = await User.create({ email, password: hash });

    return this.getUserData(createdUser);
  }

  refresh(refreshToken) {
    const newTokens = tokenService.refresh(refreshToken);

    if (!newTokens) {
      throw ApiException.unauthorized("User is not authorized");
    }

    const userPayload = tokenService.verifyAccessToken(newTokens.accessToken);

    if (!userPayload) {
      throw ApiException.internalServerError("Internal Server Error");
    }

    const userDto = new UserDTO(userPayload);

    return {
      user: { ...userDto },
      ...newTokens,
    };
  }
}

const authService = new AuthService();

export default authService;
