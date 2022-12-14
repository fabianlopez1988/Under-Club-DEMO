const Sequelize= require("sequelize")
const db= require("../config/db")

class Agency extends Sequelize.Model{}

Agency.init({
    name: {
        type: Sequelize.STRING,
        unique: true
        // allowNull: false
    },
    biography: {
        type: Sequelize.TEXT,
        // allowNull: false
    },
    photo: {
        type: Sequelize.TEXT,
        // allowNull: false
    },
    soundcloud: {
        type: Sequelize.STRING,
        //allowNull: false
    },
    instagram: {
        type: Sequelize.STRING,
        //allowNull: false
    },
    residentAdvisor: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pressKit: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
},{sequelize: db, modelName: "agency"})

module.exports= Agency
