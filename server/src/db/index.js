import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

import user from "./models/user.js";

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

export const User = sequelize.define("User", user);
