const Sequelize = require("sequelize");
const db = require("../db");

class Events extends Sequelize.Model {}

Events.init(
  {
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    flyerLarge: {
      type: Sequelize.STRING,
      allowNull: false
    },
    flyerGrid: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "event" }
);

module.exports = Events;
