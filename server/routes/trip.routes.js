const TripController = require("../controllers/trip.controller");

module.exports = function (app) {
  app.get("/api/trips", TripController.getTrips);
  app.get("/api/user/trips/:id", TripController.getTripsByUser);
  app.get("/api/trips/:id", TripController.getTrip);
  app.post("/api/trips/new", TripController.createTrip);
  app.put("/api/trips/:id", TripController.updateTrip);
  app.delete("/api/trips/:id", TripController.deleteTrip);
};
