const Sequelize = require("sequelize");
const db= require("../config/db")

class IntroCulture extends Sequelize.Model {}

IntroCulture.init(
  {
    paragraph: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },{ sequelize: db, modelName: "introCulture" });

module.exports = IntroCulture;
