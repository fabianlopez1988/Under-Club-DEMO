const Sequelize= require("sequelize")
const db= require("../db")

class Residents extends Sequelize.Model{}

Residents.init({
    name: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    biography: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
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
        //allowNull: false
    },
    facebook: {
        type: Sequelize.STRING,
        //allowNull: false
    }
},{sequelize: db, modelName: "resident"})

module.exports= Residents
