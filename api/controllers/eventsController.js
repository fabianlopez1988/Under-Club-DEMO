const Events = require("../models/Events");
const { Op } = require("sequelize");

const eventsController = {
  //crea un event
  createEvent: async (req, res) => {
    try {
      const newEvent = await Events.create(req.body);
      return res.status(201).send(newEvent);
    } catch (error) {
      console.log(error);
    }
  },
  //edita un event
  updateEvent: async (req, res) => {
    try {
      const editEvent = await Events.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      return res.status(200).send(editEvent[1]);
    } catch (error) {
      console.log(error);
    }
  },
  //elimina un event
  deleteEvent: async (req, res) => {
    try {
      await Events.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  },
  //trae todos los events
  getAllEvents: async (req, res) => {
    try {
      const getAllEvents = await Events.findAll({
        order: [["date", "ASC"]],
        where: {
          date: {
            [Op.gte]: new Date(),
          },
        },
      });
      return res.status(200).send(getAllEvents);
    } catch (error) {
      console.log(error);
    }
  },
  //trae un event
  getEvent: async (req, res) => {
    try {
      const getEvent = await Events.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).send(getEvent);
    } catch (error) {
      console.log(error);
    }
  },
  //traer eventos ordenados
  // getNextEvent: async (req, res) => {
  //   try {
  //     const arrayEvents = await Events.findAll();
  //     let dates = [];
  //     arrayEvents.map((event) => dates.push(event.date))
  //     console.log(dates)
  //     let datesInOrder = dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
  //     return res.status(201).send(datesInOrder);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};

module.exports = eventsController;
