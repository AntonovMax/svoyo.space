const express = require('express');
const router = express.Router();

const { Event } = require('../db/models')
const { Visitor } = require('../db/models')

router.route('/')
  .post(async (req, res) => {
    try {
      const { title, description, date } = req.body

      console.log(title);
      const new_event = await Event.create({ title, description, date })

      res.json({ userSignedIn: true });
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  })

router.route('/add_visitor')
  .post(async (req, res) => {
      try {
        const { name, surname, patronymic, birth, event  } = req.body
  
        const new_visitor = await Visitor.create({ name, surname, patronymic, birth, event })
  
        res.json({ userSignedIn: true });
      } catch (error) {
        console.log(error.message);
        res.status(401).end();
      }
  })

module.exports = router;
