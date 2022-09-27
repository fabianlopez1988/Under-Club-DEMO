const IntroCulture = require("../models/IntroCulture");

const introCultureController = {
  //crea intro cultura
  createIntroCulture: async (req, res) => {
    try {
      const newIntroCulture = await IntroCulture.create(req.body);
      return res.status(201).send(newIntroCulture);
    } catch (error) {
      console.log(error);
    }
  },
  //edita intro cultura
  updateIntroCulture: async (req, res) => {
    try {
      const editIntroCulture = await IntroCulture.update(req.body, {
        where: { id: req.params.id },
      });
      return res.status(201).send(editIntroCulture[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //edita el Intro de la sección Cultura
  deleteIntroCulture: async (req, res) => {
    try {
      await IntroCulture.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
  //trae el intro de cultura
  getIntroCulture: async (req, res) => {
    try {
      const getIntroCulture = await IntroCulture.findAll();
      return res.status(200).send(getIntroCulture);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = introCultureController;
