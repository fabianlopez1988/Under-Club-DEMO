const Sequelize = require("sequelize");
const db = require("../db");

class Episode extends Sequelize.Model {}

Episode.init({
  flyer: {
    type: Sequelize.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  intro: {
    type: Sequelize.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  url: {
    type: Sequelize.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
},   { sequelize: db, modelName: "episode" }
);


module.exports = Episode