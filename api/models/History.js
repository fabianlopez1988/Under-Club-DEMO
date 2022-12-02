const Sequelize = require("sequelize");
const db= require("../config/db")

class History extends Sequelize.Model {}

History.init(
  {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    history: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "history" }
);

module.exports = History;
