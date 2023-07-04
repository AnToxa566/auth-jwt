import { Sequelize } from "sequelize";

const RefreshToken = {
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

export default RefreshToken;
