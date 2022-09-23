const Users = require("../models/Users");

const usersController = {
  //crea un user
  createUser: async (req, res) => {
    try {
      const newUser = await Users.create(req.body);
      return res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
    }
  },

  //trae un user
  getUser: async (req, res) => {
    try {
      const getUser = await Users.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).send(getUser);
    } catch (error) {
      console.log(error);
    }
  },
  
  //borra un user
  deleteUser: async (req, res) => {
    try {
        await Users.destroy({
        where: { id: req.params.id },
      });
      return res.status(204);
    } catch (error) {
      console.log(error);
    }
  },

  //edita cualquier campo de user
  updateUser: async (req, res) => {
    try {
      const updateUser = await Users.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      return res.status(201).send(updateUser[1]);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usersController;
