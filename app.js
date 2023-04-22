//DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersController = require("./controllers/usersController.js");
const regionsController = require("./controllers/regionsController.js");
const projectDescriptionController = require("./controllers/projectDescriptionController.js");

// CONFIGURATION
const app = express();

//MIDDLEWEAR
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/regions", regionsController);

app.use("/projectDescription", projectDescriptionController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Destination Change App.");
});

// EXPORT
module.exports = app;
