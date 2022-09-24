const Hitos = require("../models/Hitos");

const hitosController = {
  //crea un hito
  createHito: async (req, res) => {
    try {
      const newHito = await Hitos.create(req.body);
      return res.status(201).send(newHito);
    } catch (error) {
      console.log(error);
    }
  },
  //edita un hito
  updateHito: async (req, res) => {
    try {
      const editHito = await Hitos.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      return res.status(200).send(editHito[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //elimina un hito
  deleteHito: async (req, res) => {
    try {
      await Hitos.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = hitosController;
