const Sequelize = require("sequelize");
const db= require("../config/db")

class Podcast extends Sequelize.Model {}

Podcast.init({
  flyer: {
    type: Sequelize.TEXT,
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
},   { sequelize: db, modelName: "podcast" }
);


module.exports = Podcast