const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/travelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("TravelDB connection established"))
  .catch((err) => console.log("There was an error", err));
