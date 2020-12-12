const TripController = require("../controllers/trip.controller");

module.exports = function (app) {
  app.get("/api/trips", TripController.getTrips);
  app.get("/api/user/trips/:id", TripController.getTripsByUser);
  app.get("/api/trips/:id", TripController.getTrip);
  app.post("/api/trips/new", TripController.createTrip);
  app.post("/api/trips/:id/todo/new", TripController.createTodo);
  app.post("/api/trips/:id/day/new", TripController.createDay);
  app.post("/api/itinerary/:id/activity/new", TripController.createActivity);
  app.put("/api/trips/:id", TripController.updateTrip);
  app.delete("/api/trips/:id", TripController.deleteTrip);
};
