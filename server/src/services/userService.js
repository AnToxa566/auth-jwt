import { User } from "../db/index.js";

class UserService {
  async getAll() {
    const users = await User.findAll();
    return users;
  }
}

const userService = new UserService();

export default userService;
