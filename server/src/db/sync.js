import { sequelize } from "./index.js";

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
