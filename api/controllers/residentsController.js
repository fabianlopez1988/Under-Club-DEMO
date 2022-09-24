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
  //trae de la db todos los residentes
  getAllResidents: async (req, res) => {
    try {
      const allResidents = await Residents.findAll();
      return res.status(200).send(allResidents);
    } catch (error) {
      console.log(error);
    }
  },
  //edita un residente
  updateResident: async (req, res) => {
    try {
      const editResident = await Residents.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      return res.status(201).send(editResident[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //elimina un residente
  deleteResident: async (req, res) => {
    try {
      await Residents.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = residentsController;
