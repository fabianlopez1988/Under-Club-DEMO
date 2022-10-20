const Episode = require("../models/Episode");

const episodeController = {
  //crear episode
  createEpisode: async (req, res) => {
    try {
      const newEpisode = await Episode.create(req.body);
      return res.status(200).send(newEpisode);
    } catch (error) {
      console.log(error);
    }
  },
  //trae todos los Episodes
  getAllEpisodes: async (req, res) => {
    try {
      const allEpisodes = await Episode.findAll();
      return res.status(200).send(allEpisodes);
    } catch (error) {
      console.log(error);
    }
  },
  //trae una Episode por ID
  getEpisodeById: async (req, res) => {
    try {
      const getEpisodeById = await Episode.findByPk(req.params.id);
      return res.status(200).send(getEpisodeById);
    } catch (error) {
      console.log(error);
    }
  },
  //editar Episode
  updateEpisode: async (req, res) => {
    try {
      const editEpisode = await Episode.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      return res.status(201).send(editEpisode[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //eliminar Episode
  deleteEpisode: async (req, res) => {
    try {
      await Episode.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = episodeController;