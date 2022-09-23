const Hitos = require("../models/Hitos")

const hitosController = {
    //crea hito
    createHito: async (req, res) => {
        try {
            const newHito = await Hitos.create(req.body)
            return res.status(201).send(newHito)
        } catch (error) {
            console.log(error)
        }
    },
    editHito: async (req, res) => {
        try {
            //const newEdit = await Hitos.
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports= hitosController