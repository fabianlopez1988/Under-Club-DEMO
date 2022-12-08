const Sequelize = require("sequelize");
const db= require("../config/db")

class Events extends Sequelize.Model {}

Events.init(
  {
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    flyerLarge: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    flyerGrid: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "event" }
);

module.exports = Events;
