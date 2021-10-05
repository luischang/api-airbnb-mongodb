const express = require('express');

const airbnbService = require('./airbnbService');

const routes = () => {
  const airbnbRouter = express.Router();

  airbnbRouter.route('/')
    .post(airbnbService.create)
    .get(airbnbService.findAll)

    airbnbRouter.use('/:id', (req, res, next) => {
        airbnbService.isAValidID(req.params.id) ? next() : res.sendStatus(404);
  })
  airbnbRouter.route('/:id')
    .get(airbnbService.findById)
    .put(airbnbService.findByIdAndUpdate)
    .patch(airbnbService.findByIdAndUpdate)
    .delete(airbnbService.findByIdAndRemove);

  return airbnbRouter;
};

module.exports = routes();