const Users = require("../models/Users");
const passport = require("passport");
const { sendMailToUnder } = require("../mail");

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

  //loguea un user
  loginUser: async (req, res) => {
    try {
      await passport.authenticate("local");
      return res.status(200).send(req.body);
    } catch (error) {
      console.log(error);
    }
  },

  //desloguea un user
  logoutUser: async (req, res, next) => {
    try {
      await req.logout((err) => {
        if (err) return next(err);
        return res.sendStatus(200);
      });
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

  //trae todos los users
  getAllUsers: async (req, res) => {
    try {
      const getAllUsers = await Users.findAll();
      return res.status(200).send(getAllUsers);
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

  //recibe email 
  sendMail: (req, res) => {
    try {
      const mail = {
        person: req.body.mailPerson,
        from: req.body.mailFrom,
        body: req.body.mailBody,
      };
      sendMailToUnder(mail);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = usersController;
