const History = require("../models/History");

const historyController = {
  //crea history
  createHistory: async (req, res) => {
    try {
      const newHistory = await History.create(req.body);
      return res.status(201).send(newHistory);
    } catch (error) {
      console.log(error);
    }
  },
  //edita history
  updateHistory: async (req, res) => {
    try {
      const editHistory = await History.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      return res.status(200).send(editHistory[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //elimina history
  deleteHistory: async (req, res) => {
    try {
      await History.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = historyController;
