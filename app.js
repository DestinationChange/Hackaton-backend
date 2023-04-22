const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

// CONFIGURATION
const app = express()
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App")
})
const regionsController = require("./controllers/regionsController.js")
app.use("regions", regionsController)

const usersController = require("./controllers/usersController.js")
app.use("users", usersController)
const projectDescriptionController = require("./controllers/projectDescription.js")
app.use("projectDescription", projectDescriptionController)

// EXPORT
module.exports = app
