const Sequelize = require("sequelize");
const db = require("../db");

class History extends Sequelize.Model {}

History.init(
  {
    image: {
      type: Sequelize.STRING,
      //allowNull: false
    },
    history: {
      type: Sequelize.TEXT,
      //allowNull: false
    },
  },{ sequelize: db, modelName: "history" });

module.exports = History;
