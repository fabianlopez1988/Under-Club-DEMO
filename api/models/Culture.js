const Sequelize = require("sequelize");
const db = require("../db");

class Culture extends Sequelize.Model {}

Culture.init(
  {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    paragraph: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "culture" }
);

module.exports = Culture;
