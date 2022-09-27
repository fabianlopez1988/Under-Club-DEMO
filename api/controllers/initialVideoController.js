const InitialVideo = require("../models/InitialVideo");

const initialVideoController = {
  //crea un initial
  createInitialVideo: async (req, res) => {
    try {
      const newInitialVideo = await InitialVideo.create(req.body);
      return res.status(201).send(newInitialVideo);
    } catch (error) {
      console.log(error);
    }
  },
  //edita initialvideo
  updateInitialVideo: async (req, res) => {
    try {
      const editInitialVideo = await InitialVideo.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      return res.status(200).send(editInitialVideo[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //elimina initialvideo
  deleteInitialVideo: async (req, res) => {
    try {
      await InitialVideo.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = initialVideoController;
