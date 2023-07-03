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

  async login(email, password) {
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

  async registration(email, password) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApiException.badRequest("User already exists");
    }

    const hash = await bcrypt.hash(password, 5);
    const createdUser = await User.create({ email, password: hash });

    return this.getUserData(createdUser);
  }
}

const authService = new AuthService();

export default authService;
