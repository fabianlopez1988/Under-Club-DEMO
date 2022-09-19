const Residents = require("../models/Residents");

const residentsController = {
  //crea un residente
  createResident: async (req, res) => {
    try {
      const newResident = await Residents.create(req.body);
      return res.status(201).send(newResident);
    } catch (error) {
      console.log(error);
    }
  },
  getAllResidents: async (req, res) => {
    try {
      const allResidents = await Residents.findAll();
      return res.status(200).send(allResidents);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = residentsController;
