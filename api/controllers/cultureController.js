const Culture = require("../models/Culture");

const cultureController = {
  //crear cultura
  createCulture: async (req, res) => {
    try {
      const newCulture = await Culture.create(req.body);
      return res.status(200).send(newCulture);
    } catch (error) {
      console.log(error);
    }
  },
  //trae todas las culturas
  getAllCultures: async (req, res) => {
    try {
      const allCultures = await Culture.findAll();
      return res.status(200).send(allCultures);
    } catch (error) {
      console.log(error);
    }
  },
  //editar cultura
  updateCulture: async (req, res) => {
    try {
      const editCulture = await Culture.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      console.log(editCulture);
      return res.status(201).send(editCulture[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //eliminar cultura
  deleteCulture: async (req, res) => {
    try {
      await Culture.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cultureController;
