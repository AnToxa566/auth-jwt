import pg from "pg";
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
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

const User = sequelize.define("user", user);
const RefreshToken = sequelize.define("refreshToken", refreshToken);

RefreshToken.belongsTo(User);
User.hasOne(RefreshToken);

(async () => {
  await sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Database and tables created successfully");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
})();

export { User, RefreshToken };
