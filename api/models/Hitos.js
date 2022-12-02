const Sequelize = require("sequelize");
const db= require("../config/db")

class Hitos extends Sequelize.Model {}

Hitos.init(
  {
    image: {
      type: Sequelize.STRING,
      //allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      //allowNull: false
    },
  },{ sequelize: db, modelName: "hito" });

module.exports = Hitos;
