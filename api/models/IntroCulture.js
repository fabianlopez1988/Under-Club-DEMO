const Sequelize = require("sequelize");
const db = require("../db");

class IntroCulture extends Sequelize.Model {}

IntroCulture.init(
  {
    paragraph: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  },{ sequelize: db, modelName: "introCulture" });

module.exports = IntroCulture;
