const Accommodation = require('./airbnbSchema');
const mongoose = require('mongoose');

const AccommodationService = () => {
  const isAValidID = (id) => (mongoose.Types.ObjectId.isValid(id));

  const create = (req, res) => {
    Accommodation.create(req.body, (err, accommodation) => {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(201).json(accommodation);
    })
  };

  const findAll = (req, res) => {
    Accommodation.find({}, (err, listingsAndReview) => {
      console.log("GET ALL ACCOMMODATIONS "+  listingsAndReview.toString())
      if (err) return res.status(500).send("There was a problem finding the accommodations.");



      
      res.status(200).json(listingsAndReview);
    })
  };
  
  const findById = (req, res) => {
    console.log("Find BY ID : ")
    Accommodation.findById(req.params.id, (err, accommodation) => {
      if (err) return res.status(500).send("There was a problem finding the accommodation.");
      if (!accommodation) return res.sendStatus(404);
      res.status(200).send(accommodation);
    });
  };

  const findByIdAndRemove = (req, res) => {
    Accommodation.findByIdAndRemove(req.params.id, (err, accommodation) => {
      if (err) return res.status(500).send("There was a problem deleting the accommodation.");
      res.sendStatus(204);
    });
  };

  const findByIdAndUpdate = (req, res) => {
    Accommodation.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, accommodation) => {
      if (err) return res.status(500).send("There was a problem updating the accommodation.");
      res.status(200).send(accommodation);
    });
  };

  return { 
    create,
    findAll,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    isAValidID
  };
}

module.exports = AccommodationService();