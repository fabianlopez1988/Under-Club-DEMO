const Sequelize = require("sequelize");
const db = require("../db");

class Culture extends Sequelize.Model {}

Culture.init(
  {
    image: {
      type: Sequelize.STRING,
      //allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      //allowNull: false
    },
    paragraph: {
      type: Sequelize.TEXT,
      //allowNull: false
    },
  },{ sequelize: db, modelName: "culture" });

module.exports = Culture;
