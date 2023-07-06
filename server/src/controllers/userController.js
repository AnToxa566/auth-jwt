import userService from "../services/userService.js";
import UserDTO from "../dtos/userDto.js";

class UserController {
  async getAll(req, res, next) {
    try {
      const users = await userService.getAll();
      const usersDTO = users.map((user) => ({ ...new UserDTO(user) }));

      return res.json({
        users: usersDTO,
      });
    } catch (err) {
      next(err);
    }
  }
}

const userController = new UserController();

export default userController;
