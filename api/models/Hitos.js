const Sequelize = require("sequelize");
const db = require("../db");

class Hitos extends Sequelize.Model {}

Hitos.init(
  {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{ sequelize: db, modelName: "hito" });

module.exports = Hitos;
