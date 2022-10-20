const Podcast = require("../models/Podcast");

const podcastController = {
  //crear podcast
  createPodcast: async (req, res) => {
    try {
      const newPodcast = await Podcast.create(req.body);
      return res.status(200).send(newPodcast);
    } catch (error) {
      console.log(error);
    }
  },
  //trae todos los podcasts
  getAllPodcast: async (req, res) => {
    try {
      const allPodcast = await Podcast.findAll();
      return res.status(200).send(allPodcast);
    } catch (error) {
      console.log(error);
    }
  },
  //trae una podcast por ID
  getPodcastById: async (req, res) => {
    try {
      const getPodcastById = await Podcast.findByPk(req.params.id);
      return res.status(200).send(getPodcastById);
    } catch (error) {
      console.log(error);
    }
  },
  //editar podcast
  updatePodcast: async (req, res) => {
    try {
      const editPodcast = await Podcast.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      return res.status(201).send(editPodcast[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //eliminar podcast
  deletePodcast: async (req, res) => {
    try {
      await Podcast.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = podcastController;