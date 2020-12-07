const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("express");
require("dotenv").config();

const app = express();

//Require config database
require("./server/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

//Require routes
//Users
require("./server/routes/user.routes")(app);
require("./server/routes/trip.routes")(app);

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
