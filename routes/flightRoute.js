const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)
    .post('/newflight', controller.addFlight)
    .get('/:id', controller.singleFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight)

module.exports = router;

