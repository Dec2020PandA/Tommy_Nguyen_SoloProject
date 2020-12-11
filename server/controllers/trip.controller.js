const { Trip } = require("../models/trip.model");

module.exports.getTrips = (req, res) => {
  Trip.find({})
    .then((trips) => res.json(trips))
    .catch((err) => res.json(err));
};

module.exports.getTripsByUser = (req, res) => {
  Trip.find({
    userId: req.params.id,
  })
    .then((trips) => res.json(trips))
    .catch((err) => res.json(err));
};

module.exports.getTrip = (req, res) => {
  Trip.find({ _id: req.params.id })
    .then((trip) => res.json(trip))
    .catch((err) => res.json(err));
};

module.exports.createTrip = (req, res) => {
  Trip.create(req.body)
    .then((trip) => res.json(trip))
    .catch((err) => res.json(err));
};

module.exports.createTodo = (req, res) => {
  Trip.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        todo: { todoName: req.body.todoName, completed: req.body.completed },
      },
    }
  )
    .then((updatedTrip) => res.json(updatedTrip))
    .catch((err) => res.json(err));
};

module.exports.updateTrip = (req, res) => {
  Trip.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedTrip) => res.json(updatedTrip))
    .catch((err) => res.json(err));
};

module.exports.deleteTrip = (req, res) => {
  Trip.deleteOne({ _id: req.params.id })
    .then((deletedTrip) => res.json(deletedTrip))
    .catch((err) => res.json(err));
};
