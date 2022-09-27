const Sequelize = require("sequelize");
const db = require("../db");

class InitialVideo extends Sequelize.Model {}

InitialVideo.init(
  {
    video: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "initialvideo" });

module.exports = InitialVideo;
