import { Sequelize } from "sequelize";

const User = {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
};

export default User;
