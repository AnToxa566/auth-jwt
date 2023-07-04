import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

import user from "./models/user.js";
import refreshToken from "./models/refreshToken.js";

configDotenv();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
  }
);

const User = sequelize.define("user", user);
const RefreshToken = sequelize.define("refreshToken", refreshToken);

RefreshToken.belongsTo(User);
User.hasOne(RefreshToken);

export { User, RefreshToken };
