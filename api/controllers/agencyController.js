const Agency = require("../models/Agency");

const agencyController = {
  //crea un residente
  createInternationalResident: async (req, res) => {
    try {
      const newResident = await Agency.create(req.body);
      return res.status(201).send(newResident);
    } catch (error) {
      console.log(error);
    }
  },
  //trae de la db todos los residentes
  getAllInternationalResidents: async (req, res) => {
    try {
      const allAgency = await Agency.findAll({
        order: [["name", "ASC"]],
      });
      return res.status(200).send(allAgency);
    } catch (error) {
      console.log(error);
    }
  },
  //muestra un residente por id
  getInternationalResidentById: async (req, res) => {
    try {
      const getResident = await Agency.findByPk(req.params.id);
      return res.status(200).send(getResident);
    } catch (error) {
      console.log(error);
    }
  },
  //edita un residente
  updateInternationalResident: async (req, res) => {
    try {
      const editResident = await Agency.update(req.body, {
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
  deleteInternationalResident: async (req, res) => {
    try {
      await Agency.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = agencyController;
